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
        name: "mac m1 pro1q7",
        amount: 1,
        image: "https://nhadepso.com/wp-content/uploads/2023/02/55-hinh-anh-con-bo-dep-hai-huoc-than-thuoc-voi-nhieu-the-he_9.jpg",
        price: 13434000,
        product: "656015fffce71c0d4b5653c6",
        countInStock: 13,
        discount: 1,
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
