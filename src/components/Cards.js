import React from "react";
import CardList from "./CardList";
const Cards = () => {
  return (
    <>
      <h1>Contact Manager</h1>
      <hr />
      <div>
        <h2> Contact List </h2>
        <button> Add Contact </button>
      </div>
      <hr />

      <CardList />
    </>
  );
};

export default Cards;
