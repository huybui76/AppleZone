import "./Cart.css";
import searchIcon from "../../assets/search-interface-symbol.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import noneProduct from "../../assets/noneProduct.png";
import { Button, Input, Radio, Space, Form, message } from "antd";
import * as OrderService from "../../services/OrderService";
import { useDispatch, useSelector } from "react-redux";
import orderSlide, {
  decreaseAmount,
  increaseAmount,
  removeOrderProduct,
} from "../../redux/slides/orderSlide";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import cartProduct_data from "./cartProduct_data";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(1);
  const [form] = Form.useForm();
  const [user, setUser] = useState({
    name: localStorage.getItem("userName") || "",
    phone: localStorage.getItem("userPhone") || "",
    address: localStorage.getItem("userAddress") || "",
  });
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeCount = (type, idProduct, limited) => {
    if (type === "increase" && !limited) {
      dispatch(increaseAmount({ idProduct }));
    } else if (type === "decrease" && !limited) {
      dispatch(decreaseAmount({ idProduct }));
    }
  };

  const handleDeleteOrder = (idProduct) => {
    dispatch(removeOrderProduct({ idProduct }));
  };

  const priceMemo = useMemo(() => {
    return order?.orderItemsSelected?.reduce((total, cur) => {
      return total + cur.price * cur.amount;
    }, 0);
  }, [order]);

  const priceDiscountMemo = useMemo(() => {
    return order?.orderItemsSelected?.reduce((total, cur) => {
      const totalDiscount = cur.discount || 0;
      return total + (priceMemo * (totalDiscount * cur.amount)) / 100;
    }, 0) || 0;
  }, [order, priceMemo]);

  const deliveryPriceMemo = useMemo(() => {
    if (priceMemo >= 20000 && priceMemo < 500000) {
      return 10000;
    } else if (priceMemo >= 500000 || order?.orderItemsSelected?.length === 0) {
      return 0;
    } else {
      return 20000;
    }
  }, [priceMemo, order]);

  const totalPriceMemo = useMemo(() => {
    return priceMemo - priceDiscountMemo + deliveryPriceMemo;
  }, [priceMemo, priceDiscountMemo, deliveryPriceMemo]);

  const itemsDelivery = [
    { title: "20.000 VND", description: "Dưới 200.000 VND" },
    { title: "10.000 VND", description: "Từ 200.000 VND đến dưới 500.000 VND" },
    { title: "Free ship", description: "Trên 500.000 VND" },
  ];

  const handleHomeClick = () => {
    navigate("/");
  };
  const onFinish = async (values) => {
    try {
      setUser({
        name: values.name,
        phone: values.sdt,
        address: values.address,
      });

      setIsModalOpen(false);
      handlePlaceOrder();
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };


  useEffect(() => {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userPhone", user.phone);
    localStorage.setItem("userAddress", user.address);
  }, [user]);

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const priceDiscount = (item, discountPercentage) => {
    const discountedPrice = item - (item * discountPercentage) / 100;
    return discountedPrice.toLocaleString();
  };
  const priceTotal = (price, count) => {
    const priceTotal = price * count;
    return priceTotal.toLocaleString();
  };
  const handlePlaceOrder = async () => {
    const orderData = {
      fullName: user.name,
      phone: user.phone,
      address: user.address,
      shippingMethod: selectedShippingMethod,
      // orderItems: order.map((item) => ({
      //   productId: item.product,
      //   quantity: item.amount,
      // })),
      itemsPrice: 1200000,
      totalPrice: 3242342,
      orderItems: [{
        "amount": 1,
        "product": "6560809ffce71c0d4b565439"
      }]
    };

    try {
      const response = await OrderService.createOrder(orderData);

      if (response.status === "OK") {
        message.success("Đặt hàng thành công!");
      } else {
        message.error("Đã có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!");
      }
    } catch (error) {
      message.error("Đã có lỗi xảy ra khi đặt hàng. Vui lòng thử lại!");
      console.error("Error placing order:", error);
    }
  };




  return (
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
      {cartProduct_data.length !== 0 ? (
        <div>
          <div className="body-cart">
            <div className="body-cart-content">
              <div className="products-list">
                <div className="products-list-header">
                  <div className="item1">
                    <p className="item2">Sản Phẩm</p>
                  </div>
                  <div className="price1">Đơn Giá</div>
                  <div className="quantity1">Số lượng</div>
                  <div className="total1">Số tiền</div>
                  <div className="delete1">Thao Tác</div>
                </div>

                {cartProduct_data.map((order) => (
                  <div className="item-container" key={order?.product}>
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
                      <div
                        className="item-quantity1"
                        onClick={() =>
                          handleChangeCount(
                            "decrease",
                            order?.product,
                            order?.amount === 1
                          )
                        }
                      >
                        <button className="minus">
                          <img
                            src="/minus.png"
                            alt="minus"
                            className="minus-icon"
                          />
                        </button>
                        <div
                          className="quantity"
                          defaultValue={order?.amount}
                          value={order?.amount}
                          size="small"
                          min={1}
                          max={order?.countInstock}
                        >
                          {order.amount}
                        </div>
                        <button
                          className="plus"
                          onClick={() =>
                            handleChangeCount(
                              "increase",
                              order?.product,
                              order?.amount === order.countInstock,
                              order?.amount === 1
                            )
                          }
                        >
                          <img
                            src="/plus.png"
                            alt="plus"
                            className="plus-icon"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="total">
                      {priceTotal(order.price, order.amount)}
                    </div>
                    <div className="remove-item-area">
                      <button
                        className="remove-item-btn"
                        onClick={() => handleDeleteOrder(order?.product)}
                      >
                        <img
                          src="/close.png"
                          alt="cancer"
                          className="cancer"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="payment">
              {/* Information Container */}
              <div className="information-container">
                <div className="information-container1">
                  <div className="ship-container">
                    <p>Giao Tới</p>
                    <div className="button-info-add">
                      <button onClick={() => setIsModalOpen(true)}>
                        Thêm mới
                      </button>
                    </div>
                  </div>
                  {/* Modal Component */}
                  <ModalComponent
                    forceRender
                    title="Thêm địa chỉ"
                    open={isModalOpen}
                    onCancel={handleCancel}
                    footer={null}
                  >
                    <Form
                      name="basic"
                      labelCol={{ span: 9 }}
                      wrapperCol={{ span: 14 }}
                      onFinish={onFinish}
                      autoComplete="on"
                      form={form}
                    >
                      <Form.Item
                        label="Họ Và Tên"
                        name="name"
                        rules={[
                          { required: true, message: "Vui lòng nhập thông tin!" },
                        ]}
                      >
                        <InputComponent />
                      </Form.Item>
                      <Form.Item
                        label="Số Điện Thoại"
                        name="sdt"
                        rules={[
                          { required: true, message: "Vui lòng nhập thông tin!" },
                        ]}
                      >
                        <InputComponent />
                      </Form.Item>
                      <Form.Item
                        label="Địa Chỉ"
                        name="address"
                        rules={[
                          { required: true, message: "Vui lòng nhập thông tin!" },
                        ]}
                      >
                        <InputComponent />
                      </Form.Item>

                      <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </ModalComponent>
                  {/* User Data */}
                  <div className="user-data">
                    <div className="user-data1">
                      <div className="user-data-name">
                        <p>{user.name}</p>
                      </div>
                      <div className="user-data-name">
                        <p>{user.phone}</p>
                      </div>
                    </div>
                    <div className="user-data-name3">
                      <p>{user.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Shipping Container */}
              <div className="shipping-container">
                <div className="shipping-container1">
                  <div className="voucher">
                    <p className="">Phương Thức Giao Hàng</p>
                    <div className="voucher-input-container1">
                      <Radio.Group onChange={(e) => setSelectedShippingMethod(e.target.value)} value={selectedShippingMethod}>
                        <Space direction="vertical" defaultValue={1}>
                          <Radio value={1}>Thanh Toán Khi Nhận Hàng COD</Radio>
                          <Radio value={2}>Nhận Hàng Tại Cửa Hàng</Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Container */}
              <div className="payment-container">
                <div className="payment-container1">
                  <div className="voucher">
                    <p className="">Sử Dụng Mã Giảm Giá</p>
                    <div className="voucher-input-container1">
                      <Input className="voucher-input" placeholder="Mã Giảm Giá" />
                      <Button className="voucher-btn" value="default">
                        Áp Dụng
                      </Button>
                    </div>
                    <hr />
                    <div className="total-price">
                      <p className="total-price-total">Tổng Tiền</p>
                      <p className="total-price-total1">{totalPriceMemo.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button danger className="tbuy-btn" type="primary" onClick={handlePlaceOrder}>
                Đặt Hàng
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="none-product">
          <img src={noneProduct} alt="none-product" />
          <p>Giỏ hàng của bạn chưa có sản phẩm nào!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
