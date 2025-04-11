import React from 'react'
import "./FlatDropdowns.scss"
import FlatDropdownDescription from './FlatDropdownDescription'
import FlatDropdownEquipment from './FlatDropdownEquipment'

function DropdownsFlat(props) {
  return (
    <div className='flatDropdowns'>
      <FlatDropdownDescription
        description=  {props.description}
      />
      <FlatDropdownEquipment
        equipments=  {props.equipments}
      />
    </div>
  )
}

export default DropdownsFlat