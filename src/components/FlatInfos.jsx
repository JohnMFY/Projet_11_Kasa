import React from 'react'
import "./FlatInfos.scss"

function FlatInfos(props) {
  return (
    <div>
        <div>
            <h2>{props.title}</h2>
            <p>{props.location}</p>
            <div>{props.tags}</div>
        </div>
        <div>
            <div>
            <p>{props.hostName}</p>
            <img src={props.hostPicture} alt="profil picture" />
            </div>
            <div>
                <img src="src\assets\star.svg" className='star' alt="star" /> 
            </div>
        </div>
    </div>
  )
}

export default FlatInfos