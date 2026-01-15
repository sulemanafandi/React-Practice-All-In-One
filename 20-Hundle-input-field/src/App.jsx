 import React, { useState } from 'react'
 import Uncontrolled from './Uncontrolled'
 import ControlledComponent from './ControlledComponent'
 import MultiField from './MultiField'
 import LongWayMultipleFiled from './longWayMultipleFiled'

 import './App.css'

 function App() {
   const [data, setData] = useState({
     name: '',
     email: '',
     phoneNumber: ''
   })
console.log(data);

   function clearHandler() {
     setData({
       name: '',
       email: '',
       age: '',
      phoneNumber: ''
     })
   }

   function inputHundler(e){
    const {name,value} = e.target
    // setData({...data, [name]: value})
    setData((prev)=>({...prev, [name]: value}))
   }

   return (
     <>
       <input
         type="text"
         name='name'
         onChange={inputHundler}
         placeholder="enter your name"
         value={data.name}
       />
       <br /><br />
        <input
          type="email"
          name='email'
          onChange={inputHundler}
          placeholder="enter your email"
          value={data.email}
        />
       <br /><br />
        <input
          type="number"
          name='phoneNumber'
          onChange={inputHundler}
          placeholder="enter your phone number"
          value={data.phoneNumber}
        />
        <br /><br />

       <button onClick={clearHandler}>Submit</button>

       <p>{data.name}</p>
       <p>{data.email}</p>
      <p>{data.phoneNumber}</p>

       {/* <ControlledComponent/> */}
       {/* <Uncontrolled/> */}
       {/* <MultiField/> */}
        {/* <LongWayMultipleFiled/>    */}
     </>
   )
 }

 export default App


