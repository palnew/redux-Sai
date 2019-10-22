import React from "react";
//import "./index.css";

const Winners = props => {
  return (
    <div className="win">
      <h3>Hullo {props.winner.firstname}</h3>
      <p>He was born in {props.winner.bornCountry}</p>
    </div>
  );
};

export default Winners;
