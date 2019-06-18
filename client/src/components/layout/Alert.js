import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { AlertS } from "../styles/Alert";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => <AlertS key={alert.id}>{alert.msg}</AlertS>);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
