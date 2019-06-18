import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LoginS } from "../styles/Login";

const Login = () => {
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
    console.log("Success");
  };
  return (
    <LoginS>
      <section>
        <h1>Sign In</h1>
        <h3>Sign in into your account</h3>
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

export default Login;
