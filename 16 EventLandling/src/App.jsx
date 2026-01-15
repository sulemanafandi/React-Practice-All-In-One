import "./App.css";

function App() {
  //   function handleInputChange(event) {
  //     console.log("Input changed:", event.target.value);
  //   }
  // function testing(e) {
  //   console.log(e.target.value);
  // }
  // function testing(name) {
  // console.log(name);
  // }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log("Form submitted");
  // }
  function parentHandler(e) {
    console.log("Parent clicked", e.target);
  }

  function childHandler(e, name) {
    e.stopPropagation();
    console.log("Child clicked", e.target, name);
  }
  return (
    <>
      {/* <h1 className="bg-red-500">Hello</h1>
      <button
        onClick={() => alert("Button clicked!")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click me
      </button>
      <input className='border border-white' type="text" placeholder="Enter your Name" onChange={handleInputChange} />
      <form action="" onSubmit={handleInputChange}>
        <input type="text" placeholder="Enter value " />
        <button type="submit">Submit</button>
      </form> */}
      {/* <button onClick={testing}>Click</button> */}
      {/* <input type="text" placeholder="Enter name" onChange={testing}/> */}
      {/* <button onClick={()=>testing('salman')}>Click</button> */}

      {/* <form action="" onSubmit={submitHandler}>
      <input type="text" placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form> */}
      <div className="bg-red-500 p-5" onClick={parentHandler}>
        Parent click
        <button onClick={(e) => childHandler(e ,'salman')} >Child Click</button>
      </div>
    </>
  );
}

export default App;
