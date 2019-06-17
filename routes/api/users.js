const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");
const sendEmail = require("../../config/email");
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  // Validation
  [
    check("firstname", "First Name is required.")
      .not()
      .isEmpty(),
    check("lastname", "Last Name is required.")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email.").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters."
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    // Send errors if validation went well
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname, email, password } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists." }] });
      }
      // Create new user
      user = new User({
        firstname,
        lastname,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Saves on DB
      await user.save();

      // await sendEmail(firstname, email);

      // Returns jsonwebtoken
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          //   Expires 1 day
          expiresIn: 86400
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error.");
    }
  }
);

// ------------------------------------------------------------------------------------------

// @route   GET api/users
// @desc    Get all user
// @access  Public
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// @route   DELETE api/users/:user_id
// @desc    Delete a user by id
// @access  Public
router.delete("/:user_id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);

    if (!user) return res.status(404).json({ msg: "User not found" });

    await user.remove();

    res.json({ msg: "User deleted." });
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId")
      return res.status(404).json({ msg: "User not found." });

    res.status(500).send("Server Error");
  }
});

module.exports = router;
