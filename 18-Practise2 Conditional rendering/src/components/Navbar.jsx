import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [mobileView, SetmobileView] = useState(false)
  return (
    <>
      <div className='w-full flex justify-between items-center px-[1rem] py-[1rem] bg-[#000080]' >

        <h1 className='text-2xl font-bold text-white'>Logo</h1>

        {/* Desktop Menu */}
        <div className='flex gap-9 items-center text-lg max-[720px]:hidden text-white'>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Service</a>
          <a href="">Help</a>
        </div>

        {/* Right Icons */}
        <div className='text-2xl flex items-center gap-5 text-white'>
          <span>🛒</span>
          <span>🛒</span>
          <IoMenu className='min-[720px]:hidden text-4xl cursor-pointer' onClick={() => { SetmobileView(true) }} />
        </div>

        {/* Mobile View */}
        {mobileView && (
          <div className={`absolute bg-[#000080] w-[20rem] h-screen flex flex-col top-0 left-0 transition-all duration-150 ${mobileView ? 'translate-x-0' : '-translate-x-[100%]'}`}>
            <button className='absolute top-[1rem] right-[1rem] p-3 text-white' onClick={() => { SetmobileView(false) }}>❌</button>
            <a href="" className='mt-[5rem] hover:bg-[#04043e] p-5 flex items-center justify-center text-white'>Home</a>
            <a href="" className='hover:bg-[#04043e] p-5 flex items-center justify-center text-white'>About</a>
            <a href="" className='hover:bg-[#04043e] p-5 flex items-center justify-center text-white'>Contact</a>
            <a href="" className='hover:bg-[#04043e] p-5 flex items-center justify-center text-white'>Service</a>
            <a href="" className='hover:bg-[#04043e] p-5 flex items-center justify-center text-white'>Help</a>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
