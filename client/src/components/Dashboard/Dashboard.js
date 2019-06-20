import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import {
  getCurrentProfile,
  getProfileCharacters,
  deleteAccount
} from "../../actions/profile";
import DashboardActions from "./DashboardActions";
import Character from "./Character";

import { Container } from "../styles/Utils";
import { DashboardS } from "../styles/Dashboard";
import { DarkButton } from "../styles/Utils";

import castle from "../../img/icons/castle.svg";

const Dashboard = ({
  getCurrentProfile,
  getProfileCharacters,
  deleteAccount,
  auth,
  profile: { profile, characters, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
    getProfileCharacters();
  }, []);

  return loading && profile === null ? (
    <Container>
      <Loading />
    </Container>
  ) : (
    <DashboardS>
      <Container>
        <div>
          <h1>
            <img src={castle} alt="Icon" />
            Dashboard
          </h1>
          <h2>Welcome {profile && profile.firstname}!</h2>
          {/* <DashboardActions /> */}
          <Character character={characters} />
          <DarkButton onClick={() => deleteAccount()}>
            Delete my account
          </DarkButton>
        </div>
      </Container>
    </DashboardS>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getProfileCharacters: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getProfileCharacters, deleteAccount }
)(Dashboard);
