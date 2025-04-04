import React from 'react'
import "./Card.scss"
import { NavLink } from "react-router";

function Card(props) {
  return (
    <div className='card'>
        <NavLink to={`/appartement/${props.id}`} >
        <img src={props.image} alt="" />
        <div className="appartementTitle">{props.title}</div>
        </NavLink>
    </div>
  )
}

export default Card