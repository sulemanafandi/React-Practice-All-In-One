import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>
        <b>Count : {count}</b>
      </p>

      <div className="buttons">
        {/* <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>🔄️ Reset</button> */}
        <Button text="Increment" func={increment} />
        <Button text="Decrement" func={decrement} />
        <Button text="Reset" func={reset} />
      </div>
    </>
  );
}

export default App;
