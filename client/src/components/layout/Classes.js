import React from "react";
import { charactersClasses } from "../../utils/charactersClasses";

import { ClassesS } from "../styles/Classes";
import { Container } from "../styles/Utils";

const Characters = () => {
  const renderClasses = () => {
    return charactersClasses.map(char => (
      <div key={char.id}>
        <img
          src={
            process.env.PUBLIC_URL +
            `/img/classes/${char.name.toLocaleLowerCase()}.png`
          }
          alt="Class"
        />
        <div>
          <h1>{char.name}</h1>
          <p>{char.bio}</p>
          <h2>Passive Skill</h2>
          <div>
            <h3>{char.passiveSkill}</h3>
            <p>{char.passiveSkillBio}</p>
          </div>
          <h2>Active Skills</h2>
          <div>
            <h3>{char.skill1}</h3>
            <p>{char.skill1Bio}</p>
            <h3>{char.skill2}</h3>
            <p>{char.skill2Bio}</p>
            <h3>{char.skill3}</h3>
            <p>{char.skill3Bio}</p>
            <h3>{char.skill4}</h3>
            <p>{char.skill4Bio}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <ClassesS>
      <Container>{renderClasses()}</Container>
    </ClassesS>
  );
};

export default Characters;
