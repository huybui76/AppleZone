import "./Cart.css";
import Payment from "../../components/Payment/Payment";

import searchIcon from "../../assets/search-interface-symbol.png";
import InforCustomer from "../../components/InforCustomer/InforCustomer";
import Shipping from "../../components/Shipping/Shipping";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Checkbox, Form } from "antd";
import React, { useEffect, useState, useMemo } from "react";

import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeOrderProduct,
} from "../../redux/slides/orderSlide";
import { convertPrice } from "../../utils";

import ModalComponent from "../../components/ModalComponent/ModalComponent";

import { useMutationHooks } from "../../hooks/useMutationHooks";

import cartProduct_data from "./cartProduct_data"


const Cart = () => {
  console.log(cartProduct_data)
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleChangeCount = (type, idProduct, limited) => {
    if (type === "increase") {
      if (!limited) {
        dispatch(increaseAmount({ idProduct }));
      }
    } else {
      if (!limited) {
        dispatch(decreaseAmount({ idProduct }));
      }
    }
  };

  const handleDeleteOrder = (idProduct) => {
    dispatch(removeOrderProduct({ idProduct }));
  };

  const priceMemo = useMemo(() => {
    const result = order?.orderItemsSlected?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
    return result;
  }, [order]);

  const priceDiscountMemo = useMemo(() => {
    const result = order?.orderItemsSlected?.reduce((total, cur) => {
      const totalDiscount = cur.discount ? cur.discount : 0;
      return total + (priceMemo * (totalDiscount * cur.amount)) / 100;
    }, 0);
    if (Number(result)) {
      return result;
    }
    return 0;
  }, [order]);

  const diliveryPriceMemo = useMemo(() => {
    if (priceMemo >= 20000 && priceMemo < 500000) {
      return 10000;
    } else if (priceMemo >= 500000 || order?.orderItemsSlected?.length === 0) {
      return 0;
    } else {
      return 20000;
    }
  }, [priceMemo]);
  const totalPriceMemo = useMemo(() => {
    return (
      Number(priceMemo) - Number(priceDiscountMemo) + Number(diliveryPriceMemo)
    );
  }, [priceMemo, priceDiscountMemo, diliveryPriceMemo]);

  const itemsDelivery = [
    {
      title: "20.000 VND",
      description: "Dưới 200.000 VND",
    },
    {
      title: "10.000 VND",
      description: "Từ 200.000 VND đến dưới 500.000 VND",
    },
    {
      title: "Free ship",
      description: "Trên 500.000 VND",
    },
  ];

  const handleHomeClick = () => {
    navigate("/");
  };

  const priceDiscount = (item, discountPercentage) => {
    const discountedPrice = item - (item * discountPercentage) / 100;
    return discountedPrice.toLocaleString();
  };
  const priceTotal = (price, count) => {
    const priceTotal = price * count;
    return priceTotal.toLocaleString(); // Thêm dấu phẩy phân tách hàng nghìn
  };

  return (

    cartProduct_data.length != 0 ? <div>

      <div className="cart-container">
        <div className="header-cart">
          <div className="header-title">
            <h1 onClick={handleHomeClick}>Apple Zone | Giỏ Hàng</h1>
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

              <>
                {cartProduct_data.map((order) => {
                  return (
                    <div className="item-container">
                      {/* <div className="item-space1"></div> */}
                      <div className="item__img-name">
                        <div className="item__img-name1">
                          <div className="item__img-container">
                            <img
                              src={order?.image}
                              alt={order?.name}
                              className="item-img"
                            />
                          </div>
                          <div className="item-container-name">
                            <div className="item-name">{order?.name}</div>
                            {/* <div className="item-detail">{item.detail}</div> */}
                          </div>
                        </div>
                      </div>

                      <div className="item-price">
                        <div className="item-price1">
                          {order?.price.toLocaleString()}
                        </div>
                        <div className="item-price2">
                          {priceDiscount(order?.price, order?.discount)}
                        </div>
                      </div>
                      <div className="item-quantity">
                        <div className="item-quantity1" onClick={() => handleChangeCount('decrease', order?.product, order?.amount === 1)}>
                          <button className="minus">
                            <img
                              src="/minus.png"
                              alt="minus"
                              className="minus-icon"
                            />
                          </button>

                          <div className="quantity" defaultValue={order?.amount} value={order?.amount} size="small" min={1} max={order?.countInstock}>{order.amount}</div>
                          <button className="plus" onClick={() => handleChangeCount('increase', order?.product, order?.amount === order.countInstock, order?.amount === 1)}>
                            <img src="/plus.png" alt="plus" className="plus-icon" />
                          </button>
                        </div>
                      </div>

                      <div className="total">
                        {priceTotal(order.price, order.amount)}
                      </div>
                      <div className="remove-item-area">
                        <button className="remove-item-btn" onClick={() => handleDeleteOrder(order?.product)}>
                          <img src="/close.png" alt="cancer" className="cancer" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </>
            </div>
          </div>
          <div className="payment">
            <InforCustomer />
            <Shipping />
            <Payment />
            <Button danger className="tbuy-btn" type="primary">
              Đặt Hàng
            </Button>
          </div>
        </div>
      </div>
    </div>
      : <div>
        <p>Giỏ hàng của bạn chưa có sản phẩm nào!</p>
      </div>
  );
};

export default Cart;
