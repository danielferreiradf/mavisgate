const express = require("express");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");
const Character = require("../../models/Character");

// @route   POST api/characters
// @desc    Create a character
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("nickname", "Nickname is required.")
        .not()
        .isEmpty(),
      check("characterclass", "Class is required.")
        .not()
        .isEmpty(),
      check("passiveskill", "Passive skill is required.")
        .not()
        .isEmpty(),
      check("skill1", "Skill 1 is required.")
        .not()
        .isEmpty(),
      check("skill2", "Skill 2 is required.")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    // Send errors if validation went well
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { nickname, characterclass, passiveskill, skill1, skill2 } = req.body;

    //   Build character object
    const characterFiels = {};
    characterFiels.user = req.user.id;
    if (nickname) characterFiels.nickname = nickname;
    if (characterclass) characterFiels.characterclass = characterclass;
    if (passiveskill) characterFiels.passiveskill = passiveskill;
    if (skill1) characterFiels.skill1 = skill1;
    if (skill2) characterFiels.skill2 = skill2;

    try {
      let character = await Character.findOne({ nickname });

      if (character) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Nickname is already in use." }] });
      }

      // Create
      character = new Character(characterFiels);

      await character.save();

      res.json(character);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/characters/:character_id
// @desc    Update a character
// @access  Private
router.put(
  "/:character_id",
  [
    auth,
    [
      check("passiveskill", "Passive skill is required.")
        .not()
        .isEmpty(),
      check("skill1", "Skill 1 is required.")
        .not()
        .isEmpty(),
      check("skill2", "Skill 2 is required.")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    // Send errors if validation went well
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { passiveskill, skill1, skill2 } = req.body;

    //   Build character object
    const characterFiels = {};
    // characterFiels.user = req.user.id;
    if (passiveskill) characterFiels.passiveskill = passiveskill;
    if (skill1) characterFiels.skill1 = skill1;
    if (skill2) characterFiels.skill2 = skill2;

    try {
      let character = await Character.findById(req.params.character_id);

      if (!character) {
        return res.status(404).json({ msg: "Character not found." });
      }

      if (character.user != req.user.id) {
        return res.status(404).json({ msg: "You cannot edit this character." });
      }

      // Update
      character = await Character.findOneAndUpdate(
        { user: req.user.id },
        { $set: characterFiels },
        { new: true }
      );
      return res.json(character);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/characters/all
// @desc    Get all characters
// @access  Private
router.get("/all", auth, async (req, res) => {
  try {
    const characters = await Character.find().populate("user", [
      "name",
      "email"
    ]);

    if (!characters)
      return res.status(404).json({ msg: "No characters registered." });

    res.json(characters);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/characters/
// @desc    Get a character by user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const characters = await Character.find({ user: req.user.id });

    if (!characters)
      return res.status(400).json({ msg: "Characters not found." });

    res.json(characters);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(400).json({ msg: "Character not found." });
    }

    res.status(500).send("Server Error");
  }
});

// @route   GET api/characters/:character_id
// @desc    Get a character by id
// @access  Private
router.get("/:character_id", auth, async (req, res) => {
  try {
    const character = await Character.findById(
      req.params.character_id
    ).populate("user", ["firstname", "lastname", "email"]);

    if (!character)
      return res.status(400).json({ msg: "Character not found." });

    res.json(character);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(400).json({ msg: "Character not found." });
    }

    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/characters/:character_id
// @desc    Delete a character
// @access  Private
router.delete("/:character_id", auth, async (req, res) => {
  try {
    const character = await Character.findById(req.params.character_id);

    if (!character) return res.status(404).json({ msg: "Character not found" });

    if (character.user != req.user.id) {
      return res.status(404).json({ msg: "You cannot delete this character." });
    }

    await character.remove();
    res.json(character);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId") {
      return res.status(400).json({ msg: "Character not found." });
    }

    res.status(500).send("Server Error");
  }
});

module.exports = router;
