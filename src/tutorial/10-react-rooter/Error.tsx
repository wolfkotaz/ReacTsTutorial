import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>Error Page</h1>

      <Link to="/" className="btn-link">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
