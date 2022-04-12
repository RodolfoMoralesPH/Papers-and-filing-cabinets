import React from 'react'
import Popup from '../Components/Popup'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
import Reviews from '../Components/Reviews'
function Home() {
  return (
    <main>
      <Popup />
      <Navbar />
      <Header />
      <Pricing />
      <Reviews />
    </main>
  )
}

export default Home