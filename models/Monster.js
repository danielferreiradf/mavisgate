const mongoose = require("mongoose");

const MonsterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    monsterclass: {
      type: String,
      required: true
    },
    skill1: {
      type: String,
      required: true
    },
    skill2: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = Monster = mongoose.model("monster", MonsterSchema);
