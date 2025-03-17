import React from 'react'
import "./Card.css"
import { NavLink } from "react-router";
import appartementsData from "../data.json";

const appartements = appartementsData
 appartements.map((appartement) =>
  console.log(appartement)
);

function appartementCard(appartementsData){
  const appartements = appartementsData
  const card = (
    <div className='card'>
      {appartements.map((appartement)=>
        <h3>
          {appartement.title}
        </h3>
      )}
    </div>
  );
  return card
}
console.log(appartementCard)
/**** Documentation REACT ****/
/*
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
*/
function Card() {
  return (
    <div className='card'>
        <NavLink to={"/appartement"}>
        appartements.title
        </NavLink>
    </div>
  )
}

export default Card