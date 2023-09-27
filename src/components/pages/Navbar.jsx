import React from 'react'

import './Navbar.css'
import search_icon from '../assets/search-interface-symbol.png'
import shopping_icon from '../assets/shopping-cart.png'
import user_icon from '../assets/user.png'

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-pagename">Apple Zone</div>
        <div className="nav-menu">
          <div className="menu-component">Iphone</div>
          <div className="menu-component">Mac</div>
          <div className="menu-component">Ipad</div>
          <div className="menu-component">Watch</div>
          <div className="menu-component">Âm thanh</div>
          <div className="menu-component">Phụ kiện</div>
        </div>
        <div className="nav-input">
          <input type="text" className="input-box" placeholder='Tìm kiếm sản phẩm'/>
        </div>
        <div className="shopping-icon">
          <img src={shopping_icon} alt="" className='nav-icon'/>
        </div>
        <div className="user-icon">
          <img src={user_icon} alt="" className='nav-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar