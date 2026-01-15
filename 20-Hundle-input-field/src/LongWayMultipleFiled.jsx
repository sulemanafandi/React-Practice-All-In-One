import React, { useState } from 'react'
import './App.css'

function LongWayMultipleFiled() {
      const [data, setData] = useState({
        name: '',
        email: '',
        age: ''
      })
    
      function nameHandler(e) {
        setData((prev) => ({ ...prev, name: e.target.value }))
      }
      function emailHandler(e) {
        setData({ ...data, email: e.target.value })
      }
      function ageHandler(e) {
        setData({ ...data, age: e.target.value })
      }
      function clearHandler() {
        setData({
          name: '',
          email: '',
          age: ''
        })
      }
  return (
    <>
      <input
        type="text"
        onChange={nameHandler}
        placeholder="enter your name"
        value={data.name}
      />
      <br /><br />
      <input
        type="email"
        onChange={emailHandler}
        placeholder="enter your email"
        value={data.email}
      />
      <br /><br />
      <input
        type="number"
        onChange={ageHandler}
        placeholder="enter your age"
        value={data.age}
      />
      <br /><br />
      <button onClick={clearHandler}>Submit</button>

      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.age}</p>

    </>
  )
}

export default LongWayMultipleFiled