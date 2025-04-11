import React from 'react'
import FlatCarousel from '../components/FlatCarousel'
import FlatInfos from '../components/FlatInfos'
import FlatDropdowns from '../components/FlatDropdowns'
import { useParams } from 'react-router'
import appartementsData from "../data.json";
import Error from "../Pages/Error.jsx";

function Flat() {
  const {id} = useParams()
  let flatData = appartementsData.find((appartementsData) => appartementsData.id === id)
  if(!flatData){
    return <Error/>
  }
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
        rating = {flatData.rating}
      />
      <FlatDropdowns
      equipments=  {flatData.equipments}
      description=  {flatData.description}
      />
    </div>
  )
}

export default Flat