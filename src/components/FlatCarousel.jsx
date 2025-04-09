import React from 'react'
import "./FlatCarousel.scss"

function FlatCarousel(props) {
  const pictures = props.pictures;
  return (
    <div className='Carousel'>
      {pictures.map((picture)=>
      <img src={picture}></img>
      )}
      <div className='selection'>
      <i className="fa-solid fa-chevron-left fa-7x"></i>
      <i className="fa-solid fa-chevron-right fa-7x"></i>
      </div>
    </div>
  )
}

export default FlatCarousel