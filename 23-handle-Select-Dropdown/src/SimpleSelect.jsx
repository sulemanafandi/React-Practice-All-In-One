import React, { useState } from 'react'

function SimpleSelect() {
  const [paymentMode, setPaymentMode] = useState('')
  return (
    <div>
      <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
        <option value="" disabled>Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>  
  )
}

export default SimpleSelect