import React from 'react'
import Hero from './Hero.jsx'
import About from './About.jsx'

function Layout(props) {
    console.log(props)

    const [data,setData] = React.useState('salman from Layout');
    console.log(data);
  return (
    <>
    <div className='p-8 bg-teal-900 w-full '>Layout
    <Hero data={props.data}  count={data} />
    <About data={props.data} count={data} />
    </div>
    </>
  )
}

export default Layout