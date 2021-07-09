import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        justifyContent: "center",
        width: "60px",
        height: "60px",
      }}
      animation="border"
      variant="primary"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
