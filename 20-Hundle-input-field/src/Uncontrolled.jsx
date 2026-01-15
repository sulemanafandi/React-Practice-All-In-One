import React, { useRef }  from 'react'

function Uncontrolled() {

      const inputRef = useRef(null);
    
      function submit(){
        console.log(inputRef.current.value);
      }

  return (
       <div>

      <input ref={inputRef} type="text" placeholder='Enter your name' />
      <br /><br />
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default Uncontrolled