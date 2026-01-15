import React from "react";

function Card({ name, age }) {
  console.log(name, age);

  return (
    <div className="card">
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
}

export default Card;
