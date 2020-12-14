import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./clicked-card.scss";

const ClickedCard = ({
  src,
  title,
  content,
  avatar,
  author,
  role,
  closeModalHandler,
  effect,
}) => {
  // console.log("clicked-card:", effect);

  return (
    <div className={`modal ${effect}`}>
      <section className="top">
        <button
          type="button"
          className="close-modal"
          onClick={closeModalHandler}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>
      </section>
      <img src={src} alt={title} name={title} className="img" />
      <section className="body justify">
        <p role="title" className="title bolded modal-title">
          {title}
        </p>
        <p className="card-content text ">{content}</p>
      </section>
      <section className="footer justify">
        <img src={avatar} name={author} alt="avatar" className="circle" />
        <p className="bolded text author">{`${author} - ${role}`}</p>
      </section>
    </div>
  );
};

ClickedCard.defaultProps = {
  src:
    "https://images.unsplash.com/photo-1584696049838-8e692282a2e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  title: "Empty Vienna - Wien, Österreich",
  content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
  avatar: "https://miro.medium.com/max/10236/1*_fie7Mf8VTx-wQJVH6LmwQ.jpeg",
  author: "Philipp Lublasser",
  role: "professional photographer",
};

export default ClickedCard;
