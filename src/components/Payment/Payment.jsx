import React from 'react'
import './Payment.css'
import InputComponent from '../InputComponent/InputComponent'
import { Button, Input, Flex, Radio } from 'antd';


function Payment() {
  return (
    <div className="payment-container">
      <div className="payment-container1">

        <div className="voucher">
          <p className="">Sử Dụng Mã Giảm Giá</p>
          <div className="voucher-input-container1">
            <Input className="voucher-input" placeholder="Mã Giảm Giá" />
            <Button className="voucher-btn" value="default">Áp Dụng</Button>
          </div>
          <hr />
          <div className="total-price">
            <p className="total-price-total">Tổng Tiền</p>
            <p className="total-price-total1">9000000</p>
          </div>
        </div>
        {/* <div className="total-payment">
          <div className="">Tổng thanh toán (0 sản phẩm): 0đ</div>
          <button className='pay-btn'>Mua hàng</button>
        </div> */}
      </div>

    </div>
  )
}

export default Payment