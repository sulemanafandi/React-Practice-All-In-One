import React, {  } from 'react'
import './App.css'
import axios from 'axios'

function SimpleLearn() {

  const fetchData = async ()=>{
  //  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //  const data =await res.json()
  //  console.log(data);

  // fetch('https://jsonplaceholder.typicode.com/users')
  // .then(res=>res.json())
  // .then(data=>console.log(data))

  const data = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(data)
  }

  return (
    <>
    <h1>Salman</h1>
    <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default SimpleLearn