import { useEffect, useState ,useRef} from 'react'
import './App.css'

function App() {

  const [randomNumber,setRandomNumber] = useState(0);
  const randerCountRef= useRef(0);

  const generateRandomNumber = ()=>{
    const no = Math.floor(Math.random()*100);
    setRandomNumber(no)
  }

  useEffect(()=>{
    console.log('re render trigger howa hai')
    randerCountRef.current = randerCountRef.current += 1
  })

  return (
    <>
 
    <h1>{randomNumber}</h1>
    <h1>Re-render Count : {randerCountRef.current}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>

    <h1>{randomNumber}</h1>
    <h1>Re-render Count : {randerCountRef.current}</h1>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    
    </>
  )
}

export default App
