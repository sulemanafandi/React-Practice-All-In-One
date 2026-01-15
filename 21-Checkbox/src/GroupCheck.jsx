
import { useState } from 'react'
import './App.css'

function GroupCheck() {

  const [language,setLanguage] = useState({
    html:false,
    css:false,
    js:false

  })


  return (
    <>
      {/* HTML */}
      <label htmlFor="html">
        <input 
          type="checkbox"
          id='html'
          checked={language.html}
          onChange={(e) => setLanguage({...language,html:e.target.checked})}
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
          checked={language.css}
          onChange={(e) => { setLanguage({...language,css:e.target.checked})}}
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
          checked={language.js}
          onChange={(e) => { setLanguage({...language,js:e.target.checked})}}
        /> 
        Javascript
      </label>
      <br />
      {language.js && 'JAVASCRIPT SELECTED'}
    </>
  )
}

export default GroupCheck
