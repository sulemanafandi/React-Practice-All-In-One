import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout.jsx";
import { useState } from "react";

function App() {

  const [data,setData] = useState('salman');

  function kabutar(data){
    setData(data);
  }
  console.log(data)

  return (
    <>
      <Header data={data} func={kabutar} />
      <Layout data={data} />
      <Footer data={data} />
    </>
  );
}

export default App;
