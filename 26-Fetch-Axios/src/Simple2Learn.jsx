import axios from 'axios'
import React from 'react'

function Simple2Learn() {
  const config = {
    url:'/users',
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
      Authority:'Bearer Salman'
    },
    // timeout:1000,
    data:{
      name:'salman',
      age:23
    },
    method:'POST',
    params:{
      id:5
    }
  }

  const fetchData = async ()=>{
   const res = await axios(config)
   console.log(res.data)
  }
  return (
    <>
    <button onClick={fetchData}>Fetch Data</button>
    </>
  )
}

export default Simple2Learn