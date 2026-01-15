// import { useEffect, useState } from "react";
import { useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  // why State ?
  // let data = "salman";
  // let count = 1;

  // const [count,setCount] = useState(0);
  // let [userData,setUserData] = useState({
  //   name:'Salman Khan',
  //   age:21,
  //   passions:'coding',
  // });

  // function handle(){
  //   // count = count + 1;
  //   // console.log(count)
  //   setCount(count + 1);
  // }
  // console.log(count)
  // console.log(userData);

  // let arr = ["sal", 2, 3, 5];

  // let [count, setCount] = useState(0);

  // function handleIncrement() {
  //   setCount(count + 1);
  //   setCount((prevCount) => {
  //     prevCount = prevCount + 1;
  //     console.log(prevCount);
  //     return prevCount;
  //   });
  //   console.log(count);
  // }
  // useEffect(() => {
  //   console.log("Count has been updated:", count);
  // }, [count]);

  let [count, setCount] = useState(0);

  function handleIncrement() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // Functional Update work on current state value.
    // setCount((prevCount) => prevCount +1);
    // setCount((prevCount) => prevCount + 1);
    // setCount((prevCount) => prevCount + 1); 
    // setCount((prevCount) => prevCount + 1);

    console.log(count++); 
    console.log(++count);
    }
  return (
    <>
      {/* <h1>{data}</h1> */}
      {/* <button
        onClick={() => {
          count++;
          console.log(count)
        }}
      >Increment</button> */}
      {/* <h1>{count}</h1> */}
      {/* <button onClick={handle}>Increment</button> */}
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
      {/* {arr.map((item) => {
        return <Card key={item}/>;
      })} */}
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App;
