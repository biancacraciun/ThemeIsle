import React from "react";
import "./backdrop.scss";

const Backdrop = (props) => {
  return (
    <div className="backdrop appearance" onClick={props.backdropClickHandler} />
  );
};

export default Backdrop;
