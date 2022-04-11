import React from 'react'
import Popup from '../Components/Popup'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
function Home() {
  return (
    <main>
      <Popup />
      <Navbar />
      <Header />
      <Pricing />
    </main>
  )
}

export default Home