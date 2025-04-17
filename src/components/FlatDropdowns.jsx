import React from 'react'
import "./FlatDropdowns.scss"
import Dropdown from './Dropdown'

function DropdownsFlat(props) {
  const equipements = props.equipments
  return (
    <div className='flatDropdowns'>
      <div className='flatDescription'>
        <Dropdown
            title=  "Descripton"
            description=  {props.description}
        />
      </div>
      <div className='flatEquipements'>
        <Dropdown title="Équipements" 
          description={<ul>{equipements.map((equipement, index)=>
            <li key={index}>{equipement}</li>
          )}</ul>}
        />  
      </div>
     
    </div>
  )
}

export default DropdownsFlat