import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCharacter } from "../../actions/profile";
import Alert from "../layout/Alert";

import { charactersClasses } from "../../utils/charactersClasses";

import { CreateCharacterS } from "../styles/CreateCharacter";

const CreateCharacter = ({ createCharacter, history }) => {
  const [formData, setFormData] = useState({
    nickname: "",
    characterClass: "",
    passiveSkill: "",
    skill1: "",
    skill2: ""
  });

  const { nickname, characterClass, passiveSkill, skill1, skill2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    const newChar = {
      nickname,
      characterclass: characterClass,
      passiveskill: passiveSkill,
      skill1,
      skill2
    };

    createCharacter(newChar, history);
  };

  const renderFields = () => {
    const res = charactersClasses.find(char => char.name === characterClass);

    if (res) {
      return (
        <div>
          <div>
            <h1>{res.name}</h1>
            <img
              src={
                process.env.PUBLIC_URL +
                `/img/classes/${res.name.toLocaleLowerCase()}.png`
              }
              alt="Class"
            />
            <p>{res.bio}</p>
          </div>

          <div>
            <h2>Passive Skill</h2>
            <select
              name="passiveSkill"
              value={passiveSkill}
              onChange={handleChange}
              required
            >
              <option>* Select Skill</option>
              <option value={res.passiveSkill}>{res.passiveSkill}</option>
            </select>
            {passiveSkill && <p>{res.passiveSkillBio}</p>}

            <h2>Active Skills</h2>
            <div>
              <h3>{res.skill1}</h3>
              <p>{res.skill1Bio}</p>
              <h3>{res.skill2}</h3>
              <p>{res.skill2Bio}</p>
              <h3>{res.skill3}</h3>
              <p>{res.skill3Bio}</p>
              <h3>{res.skill4}</h3>
              <p>{res.skill4Bio}</p>
            </div>

            <div>
              <select
                name="skill1"
                value={skill1}
                onChange={handleChange}
                required
              >
                <option>* Select Skill</option>
                <option value={res.skill1}>{res.skill1}</option>
                <option value={res.skill2}>{res.skill2}</option>
              </select>

              <select
                name="skill2"
                value={skill2}
                onChange={handleChange}
                required
              >
                <option>* Select Skill</option>
                <option value={res.skill3}>{res.skill3}</option>
                <option value={res.skill4}>{res.skill4}</option>
              </select>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  return (
    <CreateCharacterS>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Create a new character</h1>
          <input
            type="text"
            required
            placeholder="* Nickname"
            name="nickname"
            vale={nickname}
            onChange={handleChange}
          />
          <select
            name="characterClass"
            value={characterClass}
            onChange={handleChange}
          >
            <option value="0">* Select Character Class</option>
            <option value="Knight">Knight</option>
            <option value="Ranger">Ranger</option>
            <option value="Rogue">Rogue</option>
            <option value="Elf">Elf</option>
            <option value="Assassin">Assassin</option>
            <option value="Warrior">Warrior</option>
            <option value="Barbarian">Barbarian</option>
            <option value="Paladin">Paladin</option>
            <option value="Druid">Druid</option>
            <option value="Mage">Mage</option>
            <option value="Cleric">Cleric</option>
          </select>
          {renderFields()}
          {nickname && characterClass && (
            <>
              <Alert />
              <Link to="/dashboard">Cancel</Link>
              <input type="submit" value="Create Character" />
            </>
          )}
        </form>
      </div>
    </CreateCharacterS>
  );
};

CreateCharacter.propTypes = {
  createCharacter: PropTypes.func.isRequired
};

export default connect(
  null,
  { createCharacter }
)(withRouter(CreateCharacter));
