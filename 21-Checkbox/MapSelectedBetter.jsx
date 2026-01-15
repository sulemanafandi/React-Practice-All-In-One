import { useState } from 'react'
import './App.css'

function MapSelectedBetter() {
  const [language, setLanguage] = useState({
    html: false,
    css: false,
    js: false
  })

  const handleChecked = (e) => {
    const key = e.target.name
    setLanguage({
      ...language,
      [key]: e.target.checked
    })
  }

  const isAllChecked = Object.values(language).every(Boolean)

  const handleSelectAll = (e) => {
    const checked = e.target.checked
    const updated = Object.keys(language).reduce((acc, key) => {
      acc[key] = checked
      return acc
    }, {})
    setLanguage(updated)
  }

  return (
    <>
      {/* Select All */}
      <label htmlFor="sa">
        <input
          type="checkbox"
          id="sa"
          checked={isAllChecked}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      <br /><br />

      {/* Individual checkboxes */}
      {Object.keys(language).map((item) => (
        <div key={item}>
          <label htmlFor={item}>
            <input
              type="checkbox"
              id={item}
              name={item}
              checked={language[item]}
              onChange={handleChecked}
            />
            {item.toUpperCase()}
          </label>
          <br />
          {language[item] && `${item.toUpperCase()} SELECTED`}
          <br /><br />
        </div>
      ))}
    </>
  )
}

export default MapSelectedBetter
