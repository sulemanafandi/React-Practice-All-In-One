
import { useState } from 'react'
import './App.css'

function SingleCheckbox() {

  const [isCheck, setisCheck] = useState(true)
console.log(isCheck)
  const onChange = (e)=>{
    e.preventDefault();
    console.log(e.target.checked)
    setisCheck(e.target.checked)
  }
  return (
    <>
      <label htmlFor="cb">
      <input  type="checkbox" id='cb' checked={isCheck} onChange={onChange}/> Term and Condition
      </label>
    </>
  )
}

export default SingleCheckbox
