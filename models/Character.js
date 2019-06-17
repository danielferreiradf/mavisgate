const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    nickname: {
      type: String,
      required: true,
      unique: true
    },
    characterclass: {
      type: String,
      required: true
    },
    passiveskill: {
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

module.exports = Character = mongoose.model("character", CharacterSchema);
