import React from 'react'
import HomeNavbar from './HomeNavbar';
function HomeHeader() {
  return (
    <div className="homeheader">
        <div className="homeheader__backgroundimg">
          <HomeNavbar />
        </div>
          <div className="homeheader__profile--img">
            <div className="homeheader__profile--img-inner"></div>
          </div>
        <div className="homeheader__profile--info">
          <h1 className="homeheader__profile--info-name">Eleina Tubil</h1>
          <div className="homeheader__profile--info-box">
            <h3 className="homeheader__profile--info-job">Landscaper</h3>
            <span className="homeheader__profile--info-city">Phx, Az</span>
          </div>

          <div className="homeheader__right">
            <div>
              <btn className="btn btn_blue">+ Job</btn>
            </div>
            <div>
              <btn className="btn btn_blue">Edit Profile</btn>
            </div>
          </div>
          

        </div>
          
        <hr />

        <div className="menu margin-top-medium">
          <ul className="menu__item">
            <li className="menu__item--1">Map</li>
            <li className="menu__item--2">Jobs</li>
            <li className="menu__item--3">Clients/Hours</li>
            <li className="menu__item--4">Earnings</li>
            <li className="menu__item--5">Clients</li>
          </ul>
        </div>
    </div>
  )
}

export default HomeHeader