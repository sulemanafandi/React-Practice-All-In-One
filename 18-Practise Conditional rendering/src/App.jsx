import React, { useState } from 'react'
import './App.css'
import Popup from './components/Popup'

function App() {

  const [popup, setPopup] = useState(false);
  const [edit, setedit] = useState(false);

  return (
    <>
      {/* <button className='bg-black' onClick={() => { setPopup(true) }}>Show Pupop</button> */}
      {/* Popup */}
      <Popup popup={popup} setPopup={setPopup} />
      <button className='bg-black' onClick={() => { setPopup(true) }}>Delete</button>

      {/* Delete Popup */}
      <Popup 
      popup={popup} 
      setPopup={setPopup} 
      title={'Delete'} 
      description={'Are You Sure Yo Want To Delete This ?'} 
      />
      <button className='bg-black' onClick={() => { setedit(true) }}>Edit</button>
      
      {/* Edit Popup */}
      <Popup 
      popup={edit} 
      setPopup={setedit} 
      title={'Edit'} 
      description={'Are You Sure Yo Want To Edit This ?'} 
      />  


    </>
  )
}

export default App