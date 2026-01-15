import React, { useRef } from 'react'
import './App.css'

function SimpleUseRef() {

  const inputRef = useRef()

  const hundleFocus=()=>{
    inputRef.current.focus()
  }
  return (
    <>
      <input ref={inputRef} type="text" placeholder='Enter your name' />
      <br /><br />
      <button onClick={hundleFocus}>Focus</button>
    </>
  )
}

export default SimpleUseRef
