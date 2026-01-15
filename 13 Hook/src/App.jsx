import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [coun, setCoun] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, [count, coun]); 

  return (
    <>
      <h1>Hello, React! {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Hello, React! {coun}</h1>
      <button onClick={() => setCoun(coun - 1)}>Decrement</button>
    </>
  );
}

export default App;
