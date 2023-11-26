import React from "react";
import "./Cart.css";
import Payment from "../../components/Payment/Payment";
import CartList from "../../components/CartList/CartList";
import searchIcon from "../../assets/search-interface-symbol.png";
import InforCustomer from "../../components/InforCustomer/InforCustomer";
import Shipping from "../../components/Shipping/Shipping";
import { Button } from "antd";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="header-cart">
        <div className="header-title">
          <h1>Apple Zone | Giỏ Hàng</h1>
        </div>
        <div className="search-product">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            className="search-product-input"
          />
          <button className="search-product-button">
            <img
              src={searchIcon}
              alt="search icon"
              className="search-product-icon"
            />
          </button>
        </div>
      </div>

      <div className="body-cart">
        <div className="body-cart-content">
          <div className="products-list">
            <div className="products-list-header">
              {/* <div className="item-space2"></div> */}
              <div className="item1">
                <p className="item2">Sản Phẩm</p>
              </div>
              <div className="price1">Đơn Giá</div>
              <div className="quantity1">Số lượng</div>
              <div className="total1">Số tiền</div>
              <div className="delete1">Thao Tác</div>
            </div>
            <CartList />
          </div>
        </div>
        <div className="payment">
          <InforCustomer />
          <Shipping />
          <Payment />
          <Button danger className="tbuy-btn" type="primary">Đặt Hàng</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
