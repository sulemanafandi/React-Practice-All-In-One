
import { useState } from 'react'
import './App.css'

function BetterWork() {

  const [language, setLanguage] = useState({
    html: false,
    css: false,
    js: false

  })

  const hundleChecked = (e) => {
    const key = e.target.name
    setLanguage({
      ...language,
      [key]: e.target.checked
    })
  }

  const isAllChecked = Object.values(language).
    every(Boolean)
  console.log(isAllChecked);

  const handleSelectAll = (e)=>{
        setLanguage({
        html: e.target.checked,
        css: e.target.checked,
        js: e.target.checked
      })
    }
  
  return (
    <>
      {/* Select All */}
      <label htmlFor="sa">
        <input
          type="checkbox"
          id='sa'
          checked={isAllChecked}
          onChange={handleSelectAll}

        />
        Select All
      </label>
      <br /><br />
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

export default BetterWork
