import React from 'react'

function UserCard({userDetails}) {
    console.log(userDetails)
  return (
    <div style={{backgroundColor:'yellow',margin:'5px',color:'black'}}>
        <h1>{userDetails.id}</h1>
        <h1>{userDetails.age > 18 ? userDetails.name : 'To young'}</h1>
        <h1>{userDetails.age}</h1>
        <h1>{userDetails.class}</h1>
    </div>
  )
}

export default UserCard