import React from 'react'
import { BsCalendar3 } from 'react-icons/bs';

function HomeNavbar() {
  return (
    <div className="homenavbar">
        <span className="title">
            <BsCalendar3 /> IndieChecks
        </span>
        <div className="homenavbar__menu">
          <ul className="menu__item">
            <li className="menu__item--1">Jobs</li>
            <li className="menu__item--2">Finances</li>
            <li className="menu__item--3">Logout</li>
            
          </ul>
        </div>
    </div>
  )
}

export default HomeNavbar