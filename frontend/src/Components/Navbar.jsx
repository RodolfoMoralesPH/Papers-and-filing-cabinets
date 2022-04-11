import React from 'react'
import { BsCalendar3 } from 'react-icons/bs';
import { AiFillUnlock } from 'react-icons/ai';
function Navbar() {
  return (
    <div className="navbar">
        <span className="title">
            <BsCalendar3 /> IndieChecks
        </span>
        <div className="div">
        <button className="btn btn_grey sign-in">
           <AiFillUnlock /> Sign In
        </button>
        </div>
    </div>
  )
}

export default Navbar