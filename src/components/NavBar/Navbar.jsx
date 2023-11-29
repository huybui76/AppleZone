import React, { useState } from "react";
import FindPage from "../../pages/FindPage/FindPage";
import "./Navbar.css";
import { ShoppingCartOutlined } from '@ant-design/icons';
import search_icon from "../../assets/search-interface-symbol.png";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from 'antd'



const Navbar = () => {
  const order = useSelector((state) => state.order)
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
          <div className="menu-item-name">iPhone</div>
        </NavLink>
        <NavLink
          to="/products-type/6564aefd3adaf4c11a499a72"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item-name">iPad</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af133adaf4c11a499a7c"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item-name">Mac</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af273adaf4c11a499a89"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item-name">Tai nghe</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af3f3adaf4c11a499a99"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item-name">Phụ kiện</div>
        </NavLink>
        <NavLink
          to="/products-type/6564af583adaf4c11a499aac"
          target="_blank"
          className="menu-component"
          style={{ textDecoration: "none" }}
        >
          <div className="menu-item-name">Watch</div>
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
            <div onClick={handleCartIconClick} style={{ cursor: 'pointer' }}>
              <Badge count={order?.orderItems?.length} size="small">
                <ShoppingCartOutlined style={{ fontSize: '37px', color: '#333030' }} />
              </Badge>

            </div>
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
