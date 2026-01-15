import React, { useState } from 'react'

function DynamicSelect() {
  const [language, setLanguage] = useState('')
  console.log(language)

  const languages = ['HTML', 'CSS', 'JS', 'React', 'Node', 'MongoDB', 'Express', 'Python', 'Django']
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>

        <option value="" disabled>Select an option</option>

        {languages.map((lang, index) => (
          <option key={index} value={lang.toLowerCase()}>{lang}</option>
        ))}
        </select>
      
    </div>  
  )
}

export default DynamicSelect