import React from 'react'
import './Cart.css'
import Payment from '../../components/Payment/Payment'
import CartList from '../../components/CartList/CartList'
import user_icon from '../../assets/user.png'
import search_icon from '../../assets/search-interface-symbol.png'
import shopping_cart from '../../assets/shopping-cart.png'


function Cart() {
  return (
    <div className="CartContainer">
      <div className="header--cart">
        <div className="header__title">
            <h1>Apple Zone</h1>
        </div>
        <div className="search__product">
          <input type="text" placeholder="Tìm kiếm sản phẩm" className="search__product-input" />
          <button className="search__product-button">
            <img src={search_icon} alt="search icon" className="search__product-icon" />
          </button>
        </div>
        <div className="user">
          <img src={user_icon} alt="user" className='user__icon' />
        </div>
      </div>
      
      <div className="line">
        <hr className="hr-cart"/>
      </div>

      <div className="body--cart">
        <div className="body--cart-title">
          <div className="my-cart" >
            <img src={shopping_cart} alt="shopping icon" className="shopping-icon"/>
            <h2>My Cart</h2>
          </div>
        </div>

        <div className="body--cart-content">
          <div className="products-list">
            <div className="info">
              <div className="Item">Item</div>
              <div className="Price">Price</div>
              <div className="Quantity">Quantity</div>
              <div className="Total">Total</div>
            </div>
            <hr className="hr-cart"/>
            <CartList/>
          </div>
        </div>
      </div>

      <div className="payment">
        <Payment/>
      </div>

    
    </div>
    
    
  )
}

export default Cart