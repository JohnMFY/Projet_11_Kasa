import React, { useState } from 'react'
import "./FlatCarousel.scss"

function FlatCarousel(props) {
  const pictures = props.pictures;
  const [pictureIndex, setPictureIndex] = useState(0)
  
  const previous = () =>{
    setPictureIndex(index => {
      if(index === 0 ) return pictures.length -1
      return index -1
    })
  }
  const next = () =>{
    setPictureIndex(index => {
      if(index === pictures.length -1) return 0
      return index +1
    })
  }

  return (
    <div className='Carousel'>
      <img src={pictures[pictureIndex]}/>
      <div className='selection'>
        <i className="fa-solid fa-chevron-left fa-7x" onClick={previous}></i>
        <i className="fa-solid fa-chevron-right fa-7x" onClick={next}></i>
      </div>
      <p className='picturesCount'>{pictureIndex+1}/{pictures.length}</p>
    </div>
  )
}
export default FlatCarousel