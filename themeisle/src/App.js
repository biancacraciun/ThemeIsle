import React, { useState, useEffect } from "react";

import Cards from "./commons/containers/cards/cards";
import ClickedCard from "./commons/containers/clicked-card/clicked-card";
import Backdrop from "./commons/UI/backdrop/backdrop";
import Loader from "./commons/UI/loader/loader";
import Error from "./commons/components/error/error";

import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const [isOpen, open] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [effect, addEffect] = useState("");
  const [error, setErrorMessage] = useState(null);
  const [hasError, setError] = useState(false);
  const [id, setId] = useState("");

  const openCard = (value) => {
    open(true);
    addEffect("entrance");
    setId(value);
  };

  const closeModal = () => {
    open(false);
    addEffect("exit");
  };

  const backdropClickHandler = () => {
    open(false);
    addEffect("exit");
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((response) => response.json())
      .then((response) => {
        if (!response.ok) {
          setErrorMessage(response.statusText);
        }
        setData(response);
        if (mounted) {
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
        setErrorMessage(error.message);
      });
    return () => (mounted = false);
  }, []);

  const clickedCard = isOpen ? (
    <ClickedCard
      closeModalHandler={closeModal}
      effect={effect}
      src={data[id].thumbnail.large}
      title={data[id].title}
      content={data[id].content}
      avatar={data[id].author.avatar}
      author={data[id].author.name}
      role={data[id].author.role}
    />
  ) : null;

  const backdrop = isOpen ? (
    <Backdrop backdropClickHandler={backdropClickHandler} />
  ) : null;

  const loader = isLoading ? <Loader /> : null;

  const errorHandler = hasError && <Error errorMessage={error} />;

  return (
    <div className="app">
      <Cards data={data} openCard={openCard} />
      {clickedCard}
      {backdrop}
      {loader}
      {errorHandler}
    </div>
  );
};

export default App;
