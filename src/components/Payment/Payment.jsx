import React from 'react'
import './Payment.css'


function Payment() {
  return (
    <div className="payment-container">
        <div className="voucher">
            <p className="">Nhập mã voucher</p>
            <input type="text" />
            <button></button>
        </div>
        <div className="payment">
            <div className="">Tổng thanh toán (0 sản phẩm): 0đ</div>
            <button>Mua hàng</button>
        </div>
    </div>
  )
}

export default Payment