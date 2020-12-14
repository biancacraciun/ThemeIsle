import React, { useState } from "react";
import { showDate } from "../../../util/date";

import Button from "../../UI/buttons/more-button";
import "./card.scss";

const Card = ({
  link,
  title,
  text,
  author,
  position,
  date,
  openCardHandler,
  id,
}) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className="card" key={id}>
      <section
        className="img-landscape"
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        <img src={link} alt={title} name={title} />
        <Button
          openCardHandler={openCardHandler}
          id={id}
          isVisible={isVisible}
        />
      </section>
      <div className="bullets justify">
        <span className="circle bullet blue-bullet" />
        <span className="circle bullet yellow-bullet" />
      </div>
      <section className="card-body justify">
        <p role="title" className="title bolded">
          {title}
        </p>
        <p className="text card-text">{text}</p>
      </section>
      <section className="card-footer justify footer">
        <p className="text bolded">
          {author} - {position}
        </p>
        <p className="text bolded">{showDate(date)}</p>
      </section>
    </div>
  );
};

Card.defaultProps = {
  link:
    "https://images.unsplash.com/photo-1584696049838-8e692282a2e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  title: "Empty Vienna - Wien, Österreich",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
  author: "Philipp Lublasser",
  position: "professional photographer",
  date: "March 20, 2020",
};

export default Card;
