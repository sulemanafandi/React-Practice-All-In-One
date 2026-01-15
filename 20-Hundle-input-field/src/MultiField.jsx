import React, { useState } from 'react'
import './App.css'


function MultiField() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function NameHundler(e) {
    setName(e.target.value)
  }

  function EmailHundler(e) {
    setEmail(e.target.value)
  }

  function ClearHundler() {
    setName('');
    setEmail('');
  }


  return (
    <>
      <input type="text" placeholder='Enter your name' onChange={NameHundler} value={name}/>

      <br /><br />

      <input type="text" placeholder='Enter your Email' onChange={EmailHundler} value={email}/>

      <br /><br />

      <button onClick={ClearHundler}>Clear</button>
      <br />
      <p>{name}</p>
      <p>{email}</p>


      {/* <Uncontrolled/> */}
      {/* <ControlledComponent/> */}
    </>
  )
}

export default MultiField