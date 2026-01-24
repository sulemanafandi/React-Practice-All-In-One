import React from 'react'
import { useMyContext } from '../MyContext'

function F() {
    const {setCount} = useMyContext();
  return (
    <div className='bg-cyan-300 p-5'>
        F
        <button onClick={()=>setCount(prev=>prev+1)}>Reset</button>
        </div>
  )
}

export default F