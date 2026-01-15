import React from 'react'

function Hero(props) {
    console.log(props)
  return (
    <div className='bg-amber-300'>Hero {props.data}</div>
  )
}

export default Hero