import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMonsters } from "../../actions/monsters";

import Loading from "../layout/Loading";
import { Container } from "../styles/Utils";
import { MonstersS } from "../styles/Monsters";

const Monsters = ({ getMonsters, monster: { monsters, loading } }) => {
  useEffect(() => {
    getMonsters();
  }, []);

  const renderMonsters = () => {
    return (
      <MonstersS>
        <Container>
          {monsters.map(monster => (
            <div key={monster._id}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/img/monsters/${monster.name.toLocaleLowerCase()}.png`
                }
                alt={`Monster${monster.name}`}
              />
              <div>
                <h1>{monster.name}</h1>
                <p>{monster.monsterbio}</p>
                <h2>Race: {monster.monsterclass}</h2>
                <h2>Active Skills</h2>
                <div>
                  <h3>{monster.skill1}</h3>
                  <p>{monster.skill1bio}</p>
                  <h3>{monster.skill2}</h3>
                  <p>{monster.skill2bio}</p>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </MonstersS>
    );
  };

  return loading ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <MonstersS>{renderMonsters()}</MonstersS>
  );
};

Monsters.propTypes = {
  getMonsters: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  monster: state.monster
});

export default connect(
  mapStateToProps,
  { getMonsters }
)(Monsters);
