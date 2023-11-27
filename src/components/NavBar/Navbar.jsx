import React, { useState } from 'react'

import "./Navbar.css";
import search_icon from "../../assets/search-interface-symbol.png";
import shopping_icon from "../../assets/shopping-cart.png";
import user_icon from "../../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addOrderProduct, resetOrder } from '../../redux/slides/orderSlide'

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCartIconClick = () => {
    navigate('/cart');
  };
  const dispatch = useDispatch()
  const dispatchProduct = () => {

    dispatch(addOrderProduct({
      orderItem: {
        name: "Ipad pro m12aaaa",
        amount: 2,
        "image": [
          "https://res.cloudinary.com/dgcxf9zyh/image/upload/v1701097682/AppleZone/kycn6u8y2t8jnkpgsfdg.webp",
          "https://res.cloudinary.com/dgcxf9zyh/image/upload/v1701097682/AppleZone/wddsncyqikqugdwuisr5.jpg",
          "https://res.cloudinary.com/dgcxf9zyh/image/upload/v1701097682/AppleZone/iehjqbplzq1tiafc9nul.png",
          "https://res.cloudinary.com/dgcxf9zyh/image/upload/v1701097683/AppleZone/xclfh9gykx9jpfkgzhqh.png"
        ],
        price: 230000,
        product: "6564b0d43adaf4c11a499b3b",
        countInStock: 123,
        discount: 4,
      }
    }))
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavLink className="nav-pagename" to="/">
          Apple Zone
        </NavLink>
        <NavLink to="/products-type/Iphone" target="_blank" className="menu-component" style={{ textDecoration: "none" }}>
          <div>Iphone</div>
        </NavLink>
        <NavLink to="/products-type/Ipad" target="_blank" className="menu-component" style={{ textDecoration: "none" }}>
          <div>Ipad</div>
        </NavLink>
        <NavLink to="/products-type/Watch" target="_blank" className="menu-component" style={{ textDecoration: "none" }}>
          <div>Watch</div>
        </NavLink>
        <div className="nav-input">
          <form action='' class='search-bar'>
            <input type="text" placeholder='Tìm kiếm sản phẩm' className='input-box' />
            <button type='submit'><img src={search_icon} alt="search icon" className='search-icon' /></button>
          </form>
        </div>
        <div className="nav-icon">
          <div className="shopping-icon">
            <img src={shopping_icon} alt="" className='icon' onClick={handleCartIconClick} />
          </div>
          <div className="shopping-icon">
            <img src={shopping_icon} alt="" className='icon' onClick={dispatchProduct} />
          </div>
          {/* <div className="user-icon">
            <img src={user_icon} alt="" className='icon'  onClick={handleDropdownOpen}/>
          </div> */}
          {/* {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/SignIn" >Đăng nhập</NavLink>
              <NavLink to="/SignUp">Đăng ký</NavLink>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
