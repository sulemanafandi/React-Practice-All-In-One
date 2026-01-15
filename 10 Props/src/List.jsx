import React from 'react'

function List({item}) {

    console.log(item)
  return (
    <ul className='white'>
        {item.map((item,i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
  )
}

export default List