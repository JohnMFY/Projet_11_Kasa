import React from 'react'
import FlatCarousel from '../components/FlatCarousel'
import FlatInfos from '../components/FlatInfos'
import FlatDropdown from '../components/FlatDropdown'
import "./Flat.scss"
import { useLocation } from 'react-router'
import appartementsData from "../data.json";


function Flat() {
  const location = useLocation()
  let flatID = location.state.id
  console.log(flatID)
  let flatData = appartementsData.find((appartementsData) => appartementsData.id === flatID)
  console.log(flatData.host.name)
  return (
    <div>
      <FlatCarousel/>
      <FlatInfos
        title = {flatData.title}
        location = {flatData.location}
        tags = {flatData.tags}
        hostName ={flatData.host.name}
        hostPicture ={flatData.host.picture}

      />
      <FlatDropdown/>
    </div>
  )
}

export default Flat