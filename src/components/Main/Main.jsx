import React from 'react'
import Navbar from '../NavBar/Navbar'
const Main = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Main