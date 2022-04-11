import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="header__action">
          <h1 className="header__action-title">
            File away your job and Gig Payments
          </h1>
          <p className="margin-top-medium header__action-supplementarytext">
            Have your taxes automatically filed for you
            at the end of the year. You're welcome.
          </p>
          <div className="div">
          <button className="btn btn_blue margin-top-medium">
            Get Started
          </button>
          </div>
        </div>
    </div>
  )
}

export default Header