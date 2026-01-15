import React, { Component, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function Sal(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.age}</h1>
    </div>
  );
}

class Sq extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.age}</h1>
      </div>
    );
  }
}

function App() {

  const [count,setCount] = useState(0);

  function increment(){
    setCount(count+1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
      <h1>Salman</h1>
      <Sal title="salo" age="21" />
      <Sq title="salman" age="22" />
      <Card title="pehla" description="pehla description"/>
      <Card  title="dosra" description="dosra description"/>
      <Card  title="thisra" description="thisra description"/>
    </>
  );
}
export default App;
