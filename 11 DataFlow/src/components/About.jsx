import React from 'react'

function About(props) {
    console.log(props)
  return (
    <div className='bg-amber-500'>About {props.data}</div>
  )
}

export default About