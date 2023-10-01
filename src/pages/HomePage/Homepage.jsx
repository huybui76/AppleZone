import React from 'react'
import Flashsales from '../../components/Flashsales/Flashsales'

import Navbar from '../../components/NavBar/Navbar'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="container">
        <div className="body">
          <Flashsales/>
        </div>
    </div>
  )
}

export default Homepage