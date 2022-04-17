import React from 'react'
import './style.css'; 
const MyLoader = () => {
  return (
    // <!-- LOADING DOTS... -->
    <div className="spinner-box">
    <div className="pulse-container">  
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
    </div>
    </div>
  )
}

export default MyLoader