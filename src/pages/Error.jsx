import React from 'react'
import "./Error.scss"
import { NavLink } from "react-router";

function Error() {
  return (
    <div className='error'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      <NavLink to={"/"}>
      <h5>Retourner sur la page d’accueil</h5>
      </NavLink>
    </div>
  )
}

export default Error