import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

import Alert from "../layout/Alert";

import { LoginS } from "../styles/Login";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <LoginS>
      <section>
        <h1>Sign In</h1>
        <h3>Sign in into your account</h3>
        <Alert />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
        <p>
          Don't you have an account?{" "}
          <span>
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </section>
    </LoginS>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
