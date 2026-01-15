import "./App.css";
import Card from "./Card";
import List from "./List";
import Button from "./Button";
import PropsJsx from "./PropsJsx";
import Comp from "./Comp";
function App() {
  const obj1 = {
    name:'salman',
    age:23
  }
const  obj ={
    name:'salman',
    age:21,
}

const {name,age} = obj
console.log(name)
console.log(age)

function button1Click(){
  console.log('click me')
}
function button2Click(){
  console.log('click me 2')
}

  return (
    <div className="layout">
      <Card name="salo bahi" age={21}/>
      <Card name="salo khan" age={22}/>
      <List item={['apple','mango','orange']}/>
      <Button title={"Click Me"} func={button1Click}/>
      <Button title={"Salman"} func={button2Click}/>
      <PropsJsx content={<><h2>Hello World</h2><p>Lorem, ipsum dolor sit amet consectetur</p></>}/>
      <Comp title="hello" age={21}/>
      <Comp {...obj1}/>
    </div>
  );
}

export default App;
