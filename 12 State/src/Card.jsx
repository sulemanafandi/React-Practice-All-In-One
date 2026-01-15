import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  function handle() {
    // setCount(count + 1);
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handle}>Increment</button>
    </>
  );
}

export default Card;
