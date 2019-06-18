import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

import Alert from "../layout/Alert";

import { RegisterS } from "../styles/Register";

const Register = ({ setAlert }) => {
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
    setAlert("User Registered.");
    console.log("Success");
  };

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
              required
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              required
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
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
  setAlert: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert }
)(Register);
