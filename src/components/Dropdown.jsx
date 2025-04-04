import React, { useState } from 'react'

function Dropdown(props) {

    const [isContentVisible, setContentVisible] = useState(false);
    const visible = () =>{
        setContentVisible(!isContentVisible)
    }
  return (
    <div className='dropdown'>
            <div className='dropdownTitle'>
                <h3>{props.title}</h3>
                <img src="src\assets\chevron-up-solid.svg" alt="dropdown" className={`chevron ${isContentVisible ? "rotate" : ""}`} onClick={visible}/>
            </div>
            { isContentVisible &&<p>{props.description}</p>}
    </div>
  )
}

export default Dropdown