import React from 'react'
import "./Card.css"
import { NavLink } from "react-router";

function Card() {
  return (
    <div className='card'>
        <NavLink to={"/appartement"}>
        Titre de la location
        </NavLink>
    </div>
  )
}

export default Card