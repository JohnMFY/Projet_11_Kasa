import React, { useState } from 'react'
import "./FlatDropdown.scss"

function DropdownFlat(props) {
  const [isContentVisible, setContentVisible] = useState(false);
    const visible = () =>{
        setContentVisible(!isContentVisible)
    }
  const equipements = props.equipments
  
  return (
    <div className='flatDropdowns'>
      <div className='flatDescription'>
        <div className='flatDropdownTitle'>
          <h4>Descripton</h4>
          <i className={`fa-solid fa-chevron-up fa-2x ${isContentVisible ? "rotate" : ""}`} onClick={visible}></i>
        </div>
        { isContentVisible &&<p className='flatDropdownContent'>{props.description}</p>}
      </div>
      <div className='flatEquipements'>
        <div className='flatDropdownTitle'>
          <h4>Équipements</h4>
          <i className={`fa-solid fa-chevron-up fa-2x ${isContentVisible ? "rotate" : ""}`} onClick={visible}></i>
        </div>
        { isContentVisible &&<div className='flatDropdownContent'>{equipements.map((equipement)=><p>{equipement}</p>)}</div>}          
      </div>
    </div>
  )
}

export default DropdownFlat