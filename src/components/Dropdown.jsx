import React, { useState } from 'react'
import "./Dropdown.scss"
function Dropdown(props) {

    const [isContentVisible, setContentVisible] = useState(false);
    const visible = () =>{
        setContentVisible(!isContentVisible)
    }
  return (
    <div className='dropdown'>
            <div className='dropdownTitle'>
                <h3>{props.title}</h3>
                <i className={`fa-solid fa-chevron-up fa-2x ${isContentVisible ? "rotate" : ""}`} onClick={visible}></i>
            </div>
            { isContentVisible && <p className='dropdownContent'>{props.description}</p>}
    </div>
  )
}

export default Dropdown