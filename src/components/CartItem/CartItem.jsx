import React from 'react'
import './CartItem.css'

function CartItem({ item }) {
    return (
      <div className='item-container'>
        <div className="item__img-container">
            <img src={item.img} alt={item.name} className="item-img"/>
        </div>
        <div className='item-content'>
            <div className="item-name">
                {item.name} 
            </div>
            <div className="item-detail">
                {item.detail}
            </div>
            
        </div>
        <div className="item-price">
          {item.price} đồng
        </div>
        <div className="item-quantity">
            <button className="minus">
                <img src="/minus.png" alt="minus" className='minus-icon'/>
            </button>
            <input type="text" placeholder="1" className="quantity" />
            <button className="plus">
                <img src="/plus.png" alt="plus" className='plus-icon'/>
            </button>
        </div>

        <div className="total">{item.price} đồng </div>
 
        <button className="remove-item-btn">
            <img src="/close.png" alt="cancer" className="cancer" />
        </button>
       
      </div>
    );
  }

export default CartItem