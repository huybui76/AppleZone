import React, { useState } from "react";
import FindPage from "../../pages/FindPage/FindPage";
import "./Navbar.css";

import search_icon from "../../assets/search-interface-symbol.png";
import shopping_icon from "../../assets/shopping-cart.png";
import user_icon from "../../assets/user.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderProduct, resetOrder } from "../../redux/slides/orderSlide";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCartIconClick = () => {
    navigate("/cart");
  };
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Chuyển hướng đến trang FindPage và truyền giá trị của input
    navigate(`/find/${searchValue}`);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavLink className="nav-pagename" to="/">
          Apple Zone
        </NavLink>
        <NavLink
          to="/products-type/6564aee73adaf4c11a499a6b"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div>Iphone</div>
        </NavLink>
        <NavLink
          to="/products-type/6564aefd3adaf4c11a499a72"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div>Ipad</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af133adaf4c11a499a7c"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div>Mac</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af273adaf4c11a499a89"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div>Tai nghe</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af3f3adaf4c11a499a99"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div>Phụ kiện</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af583adaf4c11a499aac"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div>Apple Watch</div>
        </NavLink>
        <div className="nav-input">
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="input-box"
              value={searchValue}
              onChange={handleInputChange}
            />
            <button type="submit">
              <img
                src={search_icon}
                alt="search icon"
                className="search-icon"
              />
            </button>
          </form>
        </div>
        <div className="nav-icon">
          <div className="shopping-icon">
            <img
              src={shopping_icon}
              alt=""
              className="icon"
              onClick={handleCartIconClick}
            />
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
