import React from 'react'
import FlatCarousel from '../components/FlatCarousel'
import FlatInfos from '../components/FlatInfos'
import FlatDropdown from '../components/FlatDropdown'
import "./Flat.scss"
import { useParams } from 'react-router'
import appartementsData from "../data.json";


function Flat() {
  const {id} = useParams()
  let flatData = appartementsData.find((appartementsData) => appartementsData.id === id)
  return (
    <div>
      <FlatCarousel
      pictures = {flatData.pictures}
      />
      <FlatInfos
        title = {flatData.title}
        location = {flatData.location}
        tags = {flatData.tags}
        hostName ={flatData.host.name}
        hostPicture ={flatData.host.picture}
      />
      <FlatDropdown
      
      />
    </div>
  )
}

export default Flat