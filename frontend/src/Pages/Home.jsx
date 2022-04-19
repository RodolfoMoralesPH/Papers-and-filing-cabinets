import React from 'react'
import HomeHeader from '../Components/Home/HomeHeader'
import Jobs from '../Components/Home/Jobs'

function Home() {
  return (
    <main>
        <HomeHeader />
        <div className="homecomponentbox">
          <div className="homecomponentbox__left">
          <Jobs />
          </div>
          <div className="homecomponentbox__right">
          
          </div>
        </div>
    </main>
  )
}

export default Home