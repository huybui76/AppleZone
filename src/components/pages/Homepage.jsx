import React from 'react'
import Flashsales from './page components/Flashsales'

import Navbar from './page components/Navbar'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="container">
        <div className="header">
            <Navbar/>
        </div>
        <div className="body">
          <Flashsales/>
          
            
        </div>
    </div>
  )
}

export default Homepage