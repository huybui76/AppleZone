import React from 'react'
import './Payment.css'


function Payment() {
  return (
    <div className="payment-container">
        <div className="voucher">
            <p className="">Nhập mã voucher:</p>
            <div className="voucher-input-container">
              <input type="text" className='voucher-input'/>
              <button className='voucher-btn'>Enter</button>
            </div>  
        </div>
        <div className="total-payment">
            <div className="">Tổng thanh toán (0 sản phẩm): 0đ</div>
            <button className='pay-btn'>Mua hàng</button>
        </div>
        <div className=""></div>
    </div>
  )
}

export default Payment