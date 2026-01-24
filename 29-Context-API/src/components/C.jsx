import React from 'react'
import { useMyContext } from '../MyContext'

function C() {
    const {count} = useMyContext();
  return (
    <div className='bg-green-600 p-10'>
        C
        <p>{count}</p>
        </div>
  )
}

export default C