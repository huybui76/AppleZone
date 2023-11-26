import "./InforCustomer.css";
import InputComponent from "../InputComponent/InputComponent";
import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "antd";
import ModalComponent from "../../components/ModalComponent/ModalComponent";

function InforCustomer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );
  const [userPhone, setUserPhone] = useState(
    localStorage.getItem("userPhone") || ""
  );
  const [userAddress, setUserAddress] = useState(
    localStorage.getItem("userAddress") || ""
  );

  useEffect(() => {
    // Lưu trữ thông tin người dùng vào localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem("userPhone", userPhone);
    localStorage.setItem("userAddress", userAddress);
  }, [userName, userPhone, userAddress]);

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = async (values) => {
    try {
      setUserName(values.name);
      setUserPhone(values.sdt);
      setUserAddress(values.address);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating ProductType:", error);
    }
  };
  return (
    <div className="information-container">
      <div className="information-container1">
        <div className="ship-container">
          <p>Giao Tới</p>
          <div className="button-info-add">
            <button onClick={() => setIsModalOpen(true)}>Thêm mới</button>
          </div>
        </div>
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
              rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
            >
              <InputComponent />
            </Form.Item>
            <Form.Item
              label="Số Điện Thoại"
              name="sdt"
              rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
            >
              <InputComponent />
            </Form.Item>
            <Form.Item
              label="Địa Chỉ"
              name="address"
              rules={[{ required: true, message: "Vui lòng nhập thông tin!" }]}
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
        <div className="user-data">
          <div className="user-data1">
            <div className="user-data-name">
              <p>{userName}</p>
            </div>
            <div className="user-data-name">
              <p>{userPhone}</p>
            </div>
          </div>
          <div className="user-data-name3">
            <p>{userAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InforCustomer;
