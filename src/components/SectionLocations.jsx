import React from 'react'
import "./SectionLocations.css"
import Card from './card'
import appartementsData from "../data.json";


function SectionLocations() {
  const appartements = appartementsData
    appartements.map((appartement) =>
    console.log(appartement)
  );
  return (
    <div className='sectionLocations'>
      {appartements.map((appartement)=>
        <Card
          id=     {appartement.id}
          title=  {appartement.title}
          image=  {appartement.cover}
        />
      )}
    </div>
  )
}

export default SectionLocations