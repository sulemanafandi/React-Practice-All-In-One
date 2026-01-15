import React,{useState} from 'react'
import './App.css'

function ControlledComponent() {
  const [State, setState] = useState('')
  console.log(State)
  return (
    <div>
      <input type="text" placeholder='enter your name' value={State} onChange={(e)=>{
        e.preventDefault();
        setState(e.target.value)
      }} />
<br />
<br />
      <button onClick={()=>setState('')}>Clear</button>

      <h1>{State}</h1>
    </div>
  )
}

export default ControlledComponent