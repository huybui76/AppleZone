import React from 'react'


import search_icon from '../assets/search-interface-symbol.png'
import shopping_icon from '../assets/shopping-cart.png'
import user_icon from '../assets/user.png'

const Homepage = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="nav-pagename">Apple Zone</div>
        <div className="nav-menu">Iphone</div>
        <div className="nav-menu">Mac</div>
        <div className="nav-menu">Ipad</div>
        <div className="nav-menu">Watch</div>
        <div className="nav-menu">Âm thanh</div>
        <div className="nav-menu">Phụ kiện</div>
        <input type="text" className="productsInput" placeholder='Tìm kiếm sản phẩm'/>
        <img src={shopping_icon} alt="" style={{width:50, height:50,}}/>
        <img src={user_icon} alt="" style={{width:200, height:200,}}/>
      </div>
    </div>
  )
}

export default Homepage