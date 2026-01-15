import React from 'react'

function Button({title,func}) {
    console.log(title)
  return (
    <>
    <button onClick={func}>{title}</button>
    </>
)
}

export default Button