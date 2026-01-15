import { useEffect, useState ,useRef} from 'react'
import './App.css'

function ThirdUnderstanding() {

  const [count, setCount] = useState(0)
  const countRef = useRef(0)

  function increment() {
    setCount(count + 1)
    countRef.current += 1;
    console.log(countRef.current)
  }

  useEffect(() => {
    console.log('re rander hua hai')
  })
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default ThirdUnderstanding
