import React,{useState} from 'react'
import DynamicSelect from './DynamicSelect'

function App() {
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const data = {
    Pakistan: ['Islamabad','Lahore','Karachi','Faisalabad'],
    USA: ["New York", "Los Angeles", "Chicago"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Germany: ["Berlin", "Munich", "Hamburg"],
}
console.log(selectedCountry)

  return (
     <>
      <select value={selectedCountry} onChange={(e) => {
        setSelectedCountry(e.target.value)
        setSelectedCity('')
      }}>
        <option value="" disabled>---Select country---</option>
        {Object.keys(data).map((item) => {
          return (
            <option key={item} value={item}>{item.toUpperCase()}</option>
          )
        })}
      </select>


      {selectedCountry && (
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="" disabled>---Select city---</option>
          {data[selectedCountry].map((item) => {
            return (
              <option key={item} value={item}>{item.toUpperCase()}</option>
            )
          })}
        </select>
      )}
<br /><br /> 
      <p>Country: {selectedCountry}<br />city: {selectedCity}</p>
    </>
  )
}

export default App
