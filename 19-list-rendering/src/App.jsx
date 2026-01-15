import React from 'react'
import UserCard from './UserCard';

function App() {
  // const array = ["salut", "hello", "hola", "hallo", "ciao"];

  const arr = [
    { id:1, name:'salman',age:21,class:'MERN Stack'},
    { id:2, name:'Usman',age:17,class:'MERN Stack'},
    { id:3, name:'Ayan',age:12,class:'MERN Stack'},
    { id:4, name:'shifa',age:8,class:'MERN Stack'},
  ];

  // const arrays = [
  //   ['html', 'css', 'javascript', 'react'],
  //   ['mongodb', 'node js', 'expressjs', 'aws']
  // ];
  return (
    <>
      {/* array */}
      {/* {array.map((item,i)=>(
      <h1 key={i}>{item}</h1>
    ))} */}

      {/* array of objects */}
      {/* {arr.map((user,index)=>(
    <>
    <h1 key={index}>{user.name}</h1>
    <h1>{user.age}</h1>
    <h1>{user.class}</h1>
    </>
  ))} */}

      {/* array of array */}
      {/* {arrays.map((item,index)=>(
        <div key={index}>
          {item.map((item,index)=>(
            <p key={index}>{item}</p>
          ))}
        </div>
      ))} */}

    {arr.map((item)=>(
      item.age >= 18 &&
      <UserCard key={item.id} userDetails={item}/>
    ))}
    </>
  )
}

export default App