import React from 'react'
import './App.css'
import data from './data.json';
function App() {
  return (
    <>
    <div className='p-6 w-full flex flex-col gap-5'>
      {data.map((user,index)=>(
        <div key={index} className='flex bg-[#282828] p-6 rounded-lg'>

        {/* image */}
        <div className='w-1/4 flex items-center justify-center pr-5 '>
          <img src={user.image} alt={user.title} />
        </div>

        {/* detail */}
        <div className='flex-1'>
          <h1>{user.title}</h1>
          <p className='my-1 '>⭐{user.rating} | {user.reviews}</p>

          <ul className='my-3'>
          {user.details.map((item,index)=>(
            <li key={index} className='list-disc ml-6'>{item}</li>
          ))}
          </ul>

          <p className='text-green-500'>{user.offers.exchangeOffer}</p>
          <p className='text-green-300 mt-2'>{user.offers.bankOffer}</p>
          </div>
        {/* pricing */}
        <div className='flex flex-col items-end'>
          <p className='text-2xl font-bold '>{user.price}</p>
          <p className='line-through text-xl'>{user.originalPrice}</p>
          <p className='text-green-500 text-xl'>{user.discount}</p>
          </div>
        </div>
))}
    </div>
    </>
  )
}

export default App