import React from 'react'
import FlatCarousel from '../components/FlatCarousel'
import FlatInfos from '../components/FlatInfos'
import FlatDropdown from '../components/FlatDropdown'
import "./Flat.scss"

function Flat() {

  return (
    <div>
      <FlatCarousel/>
      <FlatInfos/>
      <FlatDropdown/>
    </div>
  )
}

export default Flat