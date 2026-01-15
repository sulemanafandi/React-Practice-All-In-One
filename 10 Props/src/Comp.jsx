import React from "react";

function Comp({ title = "salman", age }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{age}</h1>
    </div>
  );
}

export default Comp;
