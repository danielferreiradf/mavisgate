import React from "react";
import loading from "../../img/loading.gif";

export default () => {
  return (
    <>
      <img
        src={loading}
        style={{ width: "200px", margin: " 2rem auto", display: "block" }}
        alt="Loading"
      />
    </>
  );
};
