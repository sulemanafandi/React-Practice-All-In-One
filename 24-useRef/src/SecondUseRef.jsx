import React, { useRef } from 'react'
import './App.css'

function SecondUseRef() {

    const divRef = useRef()

    const hundleClick = () => {
        console.log(divRef.current.style.backgroundColor = 'salmon')
        console.log(divRef.current.style.borderRadius = '100%')
    }

    return (
        <>
            <div ref={divRef} style={{ backgroundColor: 'red', width: '200px', height: '200px', }}></div>
            <br /><br />
            <button onClick={hundleClick}>Focus</button>
        </>
    )
}

export default SecondUseRef
