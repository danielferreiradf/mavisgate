const express = require("express");
const config = require("config");
const router = express.Router();

const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Monster = require("../../models/Monster");

// @route   POST api/monsters
// @desc    Create or update a monster
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required.")
        .not()
        .isEmpty(),
      check("monsterclass", "Class is required.")
        .not()
        .isEmpty(),
      check("monsterbio", "Bio is required.")
        .not()
        .isEmpty(),
      check("skill1", "Skill 1 is required.")
        .not()
        .isEmpty(),
      check("skill1bio", "Skill 1 Bio is required.")
        .not()
        .isEmpty(),
      check("skill2", "Skill 2 is required.")
        .not()
        .isEmpty(),
      check("skill2bio", "Skill 2 Bio is required.")
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

    const {
      name,
      monsterclass,
      monsterbio,
      skill1,
      skill1bio,
      skill2,
      skill2bio
    } = req.body;

    //   Build monster object
    const monsterFields = {};
    if (name) monsterFields.name = name;
    if (monsterclass) monsterFields.monsterclass = monsterclass;
    if (monsterbio) monsterFields.monsterbio = monsterbio;
    if (skill1) monsterFields.skill1 = skill1;
    if (skill1bio) monsterFields.skill1bio = skill1bio;
    if (skill2) monsterFields.skill2 = skill2;
    if (skill2bio) monsterFields.skill2bio = skill2bio;

    try {
      let monster = await Monster.findOne({ name });

      if (monster) {
        return res.status(400).json({ msg: "Monster already exists." });
      }

      monster = new Monster(monsterFields);

      await monster.save();

      res.json(monster);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/monsters
// @desc    Get all monsters
// @access  Public
router.get("/", async (req, res) => {
  try {
    const monsters = await Monster.find({ name: { $exists: true } }).sort({
      name: 1
    });

    if (!monsters)
      return res.status(404).json({ msg: "No Monsters registered." });

    res.json(monsters);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/monsters/:monster_id
// @desc    Get a monster by id
// @access  Private
router.get("/:monster_id", auth, async (req, res) => {
  try {
    const monster = await Monster.findById(req.params.monster_id);

    if (!monster) return res.status(404).json({ msg: "Monster not found." });

    res.json(monster);
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId")
      return res.status(404).json({ msg: "Monster not found." });

    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/monsters/:monster_id
// @desc    Delete a monster by id
// @access  Private
router.delete("/:monster_id", auth, async (req, res) => {
  try {
    const monster = await Monster.findById(req.params.monster_id);

    if (!monster) return res.status(404).json({ msg: "Monster not found" });

    await monster.remove();

    res.json({ msg: "Monster deleted." });
  } catch (error) {
    console.error(error.message);

    if (error.kind === "ObjectId")
      return res.status(404).json({ msg: "Monster not found." });

    res.status(500).send("Server Error");
  }
});
module.exports = router;
