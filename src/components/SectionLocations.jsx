import React from 'react'
import "./SectionLocations.css"
import Card from './card'
import appartementsData from "../data.json";


function SectionLocations() {
  const appartements = appartementsData
  
  return (
    <div className='sectionLocations'>
      {appartements.map((appartement)=>
        <Card
          id=     {appartement.id}
          title=  {appartement.title}
          image=  {appartement.cover}
          key=     {appartement.id}
        />
      )}
    </div>
  )
}

export default SectionLocations