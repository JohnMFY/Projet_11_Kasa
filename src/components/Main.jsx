import React from 'react';
import "./Main.css";
import "./card.jsx";

function Main() {
  return (
    <div className='main'>
        <img className='banner' src="src\assets\Banner.png" alt="Banner" />
        <div className='section'>
          <card/>
          <card/>
          <card/>
          <card/>
          <card/>
          <card/>
        </div>
    </div>
  )
}

export default Main
