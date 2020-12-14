import React from "react";
import "../../components/card/card.scss";

const LoadMore = (props) => {
  return (
    <button
      className={props.isVisible ? "more-button" : "not-visible"}
      onClick={() => props.openCardHandler(props.id - 1)}
    >
      Learn more
    </button>
  );
};

export default LoadMore;
