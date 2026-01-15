import "./App.css";
import CompnentA from "./components/CompnentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
// import { useState } from "react";

function App() {
  // const isLogedIn = "Suleman";
  // const isLogIn = "c";
  // const messeges  ="acha salman kasay ho ap";

  // const option = "d";
  // let content = <h1>Hello how are you</h1>;

  // if (option === "a") {
  //   content = <CompnentA />;
  // } else if (option === "b") {
  //   content = <ComponentB />;
  // } else if (option === "c") {
  //   content = <ComponentC />;
  // } else {
  //   content = <h1>No component found</h1>;
  // }
  // return (
  //   <>
  //   <p>Salman {isLogedIn ? " 🙋‍♂️ Welcome back!" : "Please log in."}</p>
  //   </>
  // )

  // if (isLogedIn === "salman") {
  //   return (
  //     <>
  //       <h1>Wellcome back</h1>
  //     </>
  //   );
  // }
  // if (isLogedIn === ("Suleman")) {
  //   return (
  //     <>
  //       <h1>Wellcome M.Suleman</h1>
  //     </>
  //   );
  // }
  // return(
  //   <>
  //   <h1>Please Loged In</h1>
  //   </>
  // )

  // return <>{isLogedIn ? "hello" : "please login"}</>;

  // const [toggle, settoggle] = useState(false)
  
  // const Component = CompnentA

  const statusOption = 'success';

  const status = {
    message : <h1>Loading</h1>,
    error: <h1>error a gaya</h1>,
    success: <h1>Successfull</h1>
  }
  console.log(status.error)
  console.log(status[statusOption])
  return (
    
    <>
      {
        // isLogIn === 'a' ? <h1>wellcome</h1> : <h1>Other</h1>

        // isLogIn === 'a' ? <h1>wellcome a</h1> :
        // isLogIn === 'b' ? <h2>wellcome b</h2> :<>another</>

        // isLogIn === 'a' ? "salo 1" : isLogIn === 'b' ? "salo 2" : isLogIn === 'c' ? "salo 3" : "another"

        // messeges ? messeges : null
        // messeges ? <h1>{messeges}</h1> : null
        // messeges && <h1>{messeges}</h1> && <h1>No messege</h1>

        // <div>{content}</div>

      }
      {/* {toggle ?(
        <h1>mera toggle false ye hai</h1>
      ) :(
        <h1>mera toggle true ye hai</h1>
      )}
      
      <button onClick={()=>{settoggle(!toggle)}}>Toggle</button> */}
      {/* <Component/> */}
    </>
  );
}

export default App;
