import "./App.css";
import Header, { Footer, Card, Card1 } from "../Components/Header";
import reactLogo from "./assets/react.svg";
import { sum } from "../utilitities";
import data from "./data.json";

function App() {
  let result = sum(12, 12);
  console.log(result);
  console.log(data);

  return (
    <>
      <h1 className="h1">App hai ye</h1>
      <Header />
      <Card />
      <Card1 />
      <Footer />
      <img src="./src/assets/react.svg" alt="" />
      <img src={reactLogo} alt="" />
      <img src="./vite.svg" alt="" />
    </>
  );
  
}
export default App;
