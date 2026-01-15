
import { useState } from 'react'
import './App.css'

function PerformanceChecked() {

  const [language,setLanguage] = useState({
    html:false,
    css:false,
    js:false

  })

  const hundleChecked = (e) => {
      const key = e.target.name
      setLanguage({
        ...language,
        [key]:e.target.checked
      })
  }
  return (
    <>
      {/* HTML */}
      <label htmlFor="html">
        <input 
          type="checkbox"
          id='html'
          name='html'
          checked={language.html}
          onChange={hundleChecked}
        /> 
        HTML
      </label>
      <br />
      {language.html && 'HTML SELECTED'}
      <br /><br />
      {/* CSS */}
      <label htmlFor="css">
        <input 
          type="checkbox"
          id='css'
          name='css'
          checked={language.css}
          onChange={hundleChecked}
        /> 
        CSS
      </label>
      <br />
      {language.css && 'CSS SELECTED'}
       <br /><br />
      {/* HTML */}
      <label htmlFor="javascript">
        <input 
          type="checkbox"
          id='javascript'
          name='js'
          checked={language.js}
          onChange={hundleChecked}
        /> 
        JAVASCRIPT
      </label>
      <br />
      {language.js && 'JAVASCRIPT SELECTED'}
    </>
  )
}

export default PerformanceChecked
