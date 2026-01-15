import React,{useState} from 'react'
import './App.css'

function App() {

  const [payment, setPayment] = useState('UPI')

  const payments = [
    {id:'UPI',info:'Instant tranfer via upi apps'},
    {id:'Card',info:'Pay using credit or dedit Card'},
    {id:'COD',info:'pay when the order arrives'}
  ]
  return (
    <>
    {payments.map((item)=>{
      return(
        <>
        <label key={item.id} htmlFor={item.id}>
          <input
          id={item.id}
           type="radio"
           name='payments' 
           value={item.id}
           checked={payment === item.id}
           onChange={(e)=>setPayment(e.target.value)}
           />
           {item.id}
        </label>
        
        </>
      )
    })}
    <p>Mode Of Payment : {payment}</p>
    <p>Details: {payments.find(item => item.id === payment).info}</p>
    </>
  )
}

export default App