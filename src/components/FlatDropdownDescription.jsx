import React, { useState } from 'react'

function FlatDropdownDescription(props) {
  const [isContentVisible, setContentVisible] = useState(false);
      const visible = () =>{
          setContentVisible(!isContentVisible)
      }

    return (
        <div className='flatDescription'>
          <div className='flatDropdownTitle'>
            <h4>Descripton</h4>
            <i className={`fa-solid fa-chevron-up fa-2x ${isContentVisible ? "rotate" : ""}`} onClick={visible}></i>
          </div>
          { isContentVisible &&<p className='flatDropdownContent'>{props.description}</p>}
        </div>
    )
}

export default FlatDropdownDescription