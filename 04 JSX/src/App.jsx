import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  let name = "salman";
  let age = 18;
  let isOutOfStock = true;
  let arr = ["salman", "khan", "salo bahi", "oaky"];
  let alpha = <p>Hello world how {2 + 2} are you</p>;
  let user = {
    name: "Salman khan",
    age: 21,
  };

  function greet() {
    return "Kasay hai";
  }

  return (
    <>
      <h1>
        Hello {name}! {greet()}
      </h1>
      <h1>{age >= 18 ? "Drive Bie" : "Drive Car"}</h1>
      <p style={{ backgroundColor: "red", fontSize: "30px", padding: "5px" }}>
        My name is Salman
      </p>
      <div>{age >= 18 ? <p>Yes</p> : <p>No</p>} </div>
      {isOutOfStock && <p>Out Of Stock</p>}
      {arr.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
      {alpha}
      <Header title={<p>Hello world how {2 + 2} are you</p>} />
      {React.createElement("h1", null, "Hello how are you")}
      {React.createElement("h1", { className: "heading" }, "Hello baba")}

      {React.createElement(
        "h1",
        { className: "heading", style: { backgroundColor: "red" } },
        "Hello baba"
      )}

      {React.createElement("p", null, `my name is ${name}`)}

      {/* this is work behind the scene
       <div className="card">
        <h1>Hello {user.name}</h1>
        <p>Your age is {user.age}</p>
      </div> */}

      {/* here */}
      {React.createElement(
        "div",
        { className: "card" },
        React.createElement('h1', null, `Hello ${user.name}`),
        React.createElement('p', null, `you are ${user.age + 1} year old`)
      )}
    </>
  );
}

export default App;
