import React, {useState} from 'react'

import './Navbar.css'
import search_icon from '../../assets/search-interface-symbol.png'
import shopping_icon from '../../assets/shopping-cart.png'
import user_icon from '../../assets/user.png'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCartIconClick = () => {
    navigate('/Cart');
  };

  return (  
    <div className="navbar-container">
      <div className="navbar">
        <NavLink className="nav-pagename" to="/">Apple Zone</NavLink>
        <div className="nav-menu">  
          <div className="menu-component">Iphone</div>
          <div className="menu-component">Mac</div>
          <div className="menu-component">Ipad</div>
          <div className="menu-component">Watch</div>
          <div className="menu-component">Âm thanh</div>
          <div className="menu-component">Phụ kiện</div>
        </div>
        <div className="nav-input">
          <form action='' class='search-bar'>
            <input type="text" placeholder='Tìm kiếm sản phẩm' className='input-box'/>
            <button type='submit'><img src={search_icon} alt="search icon" className='search-icon'/></button>
          </form>
        </div>
        <div className="nav-icon">
          <div className="shopping-icon">
            <img src={shopping_icon} alt="" className='icon' onClick={handleCartIconClick}/>
          </div>
          <div className="user-icon">
            <img src={user_icon} alt="" className='icon'  onClick={handleDropdownOpen}/>
          </div>
          {dropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/SignIn" >Đăng nhập</NavLink>
                <NavLink to="/SignUp">Đăng ký</NavLink>
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Navbar