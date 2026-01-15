
import { useState } from 'react'
import './App.css'

function MultipleCheckbox() {

  const [isHtml, setHTML] = useState(true)
  const [isCSS, setCSS] = useState(true)
  const [isJavascript, setisJavascript] = useState(true)


  return (
    <>
      {/* HTML */}
      <label htmlFor="html">
        <input 
          type="checkbox"
          id='html'
          checked={isHtml}
          onChange={(e) => { setHTML(e.target.checked) }}
        /> 
        HTML
      </label>
      <br />
      {isHtml && 'HTML SELECTED'}
      <br /><br />
      {/* CSS */}
      <label htmlFor="css">
        <input 
          type="checkbox"
          id='css'
          checked={isCSS}
          onChange={(e) => { setCSS(e.target.checked) }}
        /> 
        CSS
      </label>
      <br />
      {isCSS && 'CSS SELECTED'}
       <br /><br />
      {/* HTML */}
      <label htmlFor="javascript">
        <input 
          type="checkbox"
          id='javascript'
          checked={isJavascript}
          onChange={(e) => { setisJavascript(e.target.checked) }}
        /> 
        Javascript
      </label>
      <br />
      {isJavascript && 'JAVASCRIPT SELECTED'}
    </>
  )
}

export default MultipleCheckbox
