import React from "react";
import "./Shipping.css";
import { Radio, Space } from "antd";

function Shipping() {
  return (
    <div className="shipping-container">
      <div className="shipping-container1">
        <div className="voucher">
          <p className="">Phương Thức Giao Hàng</p>
          <div className="voucher-input-container1">
            <Radio.Group>
              <Space direction="vertical" defaultValue={1}>
                <Radio value={1}>Thanh Toán Khi Nhận Hàng COD</Radio>
                <Radio value={2}>Nhận Hàng Tại Cửa Hàng</Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        {/* <div className="total-payment">
          <div className="">Tổng thanh toán (0 sản phẩm): 0đ</div>
          <button className='pay-btn'>Mua hàng</button>
        </div> */}
      </div>
    </div>
  );
}

export default Shipping;
