import React, { useState } from 'react'

function FlatDropdownEquipment(props) {
const [isContentVisible, setContentVisible] = useState(false);
    const visible = () =>{
        setContentVisible(!isContentVisible)
    }
  const equipements = props.equipments
  
  return (
      <div className='flatEquipements'>
        <div className='flatDropdownTitle'>
          <h4>Équipements</h4>
          <i className={`fa-solid fa-chevron-up fa-2x ${isContentVisible ? "rotate" : ""}`} onClick={visible}></i>
        </div>
        { isContentVisible &&<div className='flatDropdownContent'>{equipements.map((equipement)=><p>{equipement}</p>)}</div>}          
      </div>
  )
}

export default FlatDropdownEquipment