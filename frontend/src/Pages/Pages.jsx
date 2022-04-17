import Signup from './Signup'
import Home from './Home'

import React from 'react'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default Pages