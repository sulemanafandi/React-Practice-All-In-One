import React from 'react'

function Header(props) {
  const [data,setData] = React.useState('header ka data');
    function ChangeData(){
        props.func(data);
    }
    return (
    <div onClick={ChangeData} className="bg-gray-800 text-white p-4">Header</div>
  )
}

export default Header