import { useState } from 'react'

import './App.css'

function GroupMapRadioButton() {
    const [gender, setGender] = useState('other')
    const genders = ['male', 'female', 'other']
    console.log(gender)
    return (
        <>
            {genders.map((item) => {
                return (
                    <>
                        <label key={item} htmlFor={item} >
                            <input 
                                type="radio"
                                id={item}
                                name='gender'
                                value={item}
                                checked={gender === item}
                                onChange={(e)=>setGender(e.target.value)}
                            />
                            {item}
                        </label>
                    </>
                )
            })}
        </>
    )
}

export default GroupMapRadioButton
