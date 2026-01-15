import React from "react";

const Navbar = (props) => {
    console.log(props)
  return (
    <div>
      <h1>Navbar</h1>
      <h1>{props.title}</h1>
      <h1>{props.link}</h1>
      <h1>{props.Number}</h1>
    </div>
  );
};

export default Navbar;
