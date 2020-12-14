import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import "./error.scss";

const Error = (props) => {
  return (
    <div className="error-container">
      <h1 className="error warning">{props.errorMessage}</h1>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        size="2x"
        className="warning"
      />
    </div>
  );
};

export default Error;
