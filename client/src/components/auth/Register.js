import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

import Alert from "../layout/Alert";

import { RegisterS } from "../styles/Register";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const { firstName, lastName, email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    register({ firstname: firstName, lastname: lastName, email, password });
  };

  // Redirects to login
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <RegisterS>
      <section>
        <h1>Sign Up</h1>
        <h3>Create you account</h3>
        <Alert />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              required
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              required
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              minLength="6"
              value={password}
              onChange={handleChange}
            />
          </div>
          <input type="submit" value="Register" />
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Sign In</Link>
          </span>
        </p>
      </section>
    </RegisterS>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
