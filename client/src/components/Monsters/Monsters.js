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
  console.log(typeof monsters);

  const renderMonsters = () => {
    return monsters.map(monster => <h1>{monster.name}</h1>);
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
