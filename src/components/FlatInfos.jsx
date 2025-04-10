import React from 'react'
import "./FlatInfos.scss"

function FlatInfos(props) {
  const tags = props.tags;
  console.log(tags)
  return (
    <div className='flatInfo'>
        <div className='flatDivLeft'>
            <h1 className='flatTitle'>{props.title}</h1>
            <p className='flatLocation'>{props.location}</p>
            <div className='tagsDiv'>
              {tags.map((tag)=><p className='flatTag'>{tag}</p>)}
            </div>
        </div>
        <div>
            <div className='flatDivRight'>
              <div className='hostDiv'>
                <p className='hostName'>{props.hostName}</p>
                <img src={props.hostPicture} alt="profil picture" />
              </div>
              <div className='stars'>
                <i className="fa-solid fa-star fa-xl star"></i>
                <i className="fa-solid fa-star fa-xl star"></i>
                <i className="fa-solid fa-star fa-xl star"></i>
                <i className="fa-solid fa-star fa-xl star"></i>
                <i className="fa-solid fa-star fa-xl"></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FlatInfos