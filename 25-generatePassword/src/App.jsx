import React, { useEffect, useState,useRef } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState('');
  const [length, setLength] = useState(1);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);

  const [savedPasswords, setSavedPasswords] = useState([]);

  const passwordRef = useRef(null);
  const generatePassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) {
      str += "0123456789";
    }
    if (isCharacterAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      password += str[randomIndex];
    }
    setPassword(password);
  }

  useEffect(() => {
    generatePassword();
  }, [length, isCharacterAllowed, isNumberAllowed]);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  return (
    <>
      <div className='select-none flex flex-col gap-10 max-w-120 m-auto'>
        <h1 className='text-center font-bold mt-5 text-5xl'>Password Generate</h1>
        <input
          type="text"
          placeholder='Enter Your Password'
          readOnly={true}
          value={password}
          ref={passwordRef} 
          className='outline-none border-none bg-gray-400 px-3 py-1 rounded-lg text-black'
        />
        <input
          type="range"
          min={0}
          max={200}
          value={length}
          onChange={(e) => { setLength(Number(e.target.value)) }}
        />

        <label htmlFor="numberAllowed">
          <input
            type="checkbox"
            id='numberAllowed'
            checked={isNumberAllowed}
            onChange={(e)=>{setIsNumberAllowed(e.target.checked)}}
          /> 
          Number Allowed 
        </label>
        <label htmlFor="characterAllowed">
          <input
            type="checkbox"
            id='characterAllowed'
            checked={isCharacterAllowed}
            onChange={(e)=>{setIsCharacterAllowed(e.target.checked)}}
          /> 
          Character Allowed 
        </label>

        <button className='bg-blue-500 px-3 py-2 rounded-lg'  onClick={copyPasswordToClipboard}>Copy Password</button>

        <button className='bg-blue-500 px-3 py-2 rounded-lg' 
        onClick={()=>{setLength(8);
        setIsNumberAllowed(false);
        setIsCharacterAllowed(false);
        }}>Reset Password</button>

        <button className='bg-blue-500 px-3 py-2 rounded-lg ' onClick={()=>{setSavedPasswords(prevPass=>([...prevPass,password]))}}>Save Password</button>

        <div className='mt-5'>
          <h2 className='font-bold text-xl'>Saved Passwords</h2>
          <ul>
            {savedPasswords.map((pwd, index) => (
              <li key={index} className='mt-2'>{pwd}</li>
            ))}
          </ul>
        </div>

      </div>
    </>
  )
}

export default App