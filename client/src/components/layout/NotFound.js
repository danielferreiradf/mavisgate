import React from "react";
import loading from "../../img/loading.gif";
import { Container } from "../styles/Utils";

const NotFound = () => {
  return (
    <>
      <Container style={{ minHeight: "71vh" }}>
        <h1 style={{ textAlign: "center", margin: "4rem 0" }}>
          Page Not Found
        </h1>
        <h2 style={{ textAlign: "center", margin: "4rem 0" }}>
          This page does not exist.
        </h2>
        <img
          src={loading}
          style={{ width: "200px", margin: " 2rem auto", display: "block" }}
          alt="Loading"
        />
      </Container>
    </>
  );
};

export default NotFound;
