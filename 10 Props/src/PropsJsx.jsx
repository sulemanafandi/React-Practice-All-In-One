import React from 'react'

function PropsJsx({content}) {
    console.log(content)
  return (
    <div className='card'>{content}</div>
  )
}

export default PropsJsx