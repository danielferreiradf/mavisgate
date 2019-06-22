import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteCharacter } from "../../actions/profile";

import { CharacterTableS } from "../styles/CharacterTable";

const Character = ({ character, deleteCharacter }) => {
  const characters = character.map(char => (
    <tr key={char._id}>
      <td>{char.nickname}</td>
      <td>{char.characterclass}</td>
      <td>
        <Moment format="DD/MM/YYYY">{char.createdAt}</Moment>
      </td>
      <td>{char.passiveskill}</td>
      <td>{char.skill1}</td>
      <td>{char.skill2}</td>
      <td>
        <button onClick={() => deleteCharacter(char._id)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2>My Characters</h2>
      <CharacterTableS>
        {character && (
          <table>
            <thead>
              <tr>
                <th>Nickname</th>
                <th>Class</th>
                <th>Created At</th>
                <th>Passive Skill</th>
                <th>Skill 1</th>
                <th>Skill 2</th>
                <th />
              </tr>
            </thead>
            <tbody>{characters}</tbody>
          </table>
        )}
      </CharacterTableS>
    </>
  );
};

Character.propTypes = {
  character: PropTypes.array.isRequired,
  deleteCharacter: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCharacter }
)(Character);
