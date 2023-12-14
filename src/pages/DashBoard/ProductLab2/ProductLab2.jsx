import React, { useState } from "react";
import { Space, Input, Button, message } from "antd";
import './index.css';
import moment from "moment";

const ProductLab2 = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });



  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.message === ""
    ) {
      message.error("Vui lòng điền tất cả các trường.");
      return;
    }

    if (formData.name.length < 3) {
      message.error("Nhập ít nhất 3 kí tự.");
      return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      message.error("Số điện thoại phải bắt đầu bằng số 0 và có ít nhất 10 kí tự.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      message.error("Không đúng định dạng email.");
      return;
    }

    const timestamp = moment().format("DD/MM/YYYY h:mm:ss A");
    const newData = `${formData.name} | ${formData.email} | ${formData.phone} | ${formData.message} | ${timestamp}\n`;
    setData([...data, newData]);

    setFormData({ name: "", email: "", phone: "", message: "" });

    message.success("Chúng tôi đã tiếp nhận yêu cầu!");

    const blob = new Blob([...data, newData], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "submitted_data.txt";
    link.click();
  };
  return (
    <div className="product-lab2-container">
      <div className="product-lab2-container1">
        <h1>Thông tin liên hệ</h1>
        <div>Trường Đại học Công nghệ Thông tin.</div>
        <div>Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</div>
        <div>p:(028) 372 51993</div>

        <div className="email-container"><strong>Email: </strong><a href="info@uit.edu.vn">info@uit.edu.vn</a></div>
        <div className="email-container1"><strong>Website: </strong><a href="uit.edu.vn">uit.edu.vn</a></div>
        <div><iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3918.2324288146738!2d106.80161941411598!3d10.86991839225808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1588878290282!5m2!1svi!2s"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
        </div>
      </div>

      <div className="product-lab2-container2">
        <div className="infor-title">Liên hệ với chúng tôi</div>
        <div className="infor-v">
          <div className="infor-name">Họ và tên:</div>
          <Input
            style={{ height: 50, width: 400 }}
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>
        <div className="infor-v">
          <div className="infor-name">Địa chỉ Email:</div>
          <Input
            style={{ height: 50, width: 400 }}
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="infor-v">
          <div className="infor-name">Số điện thoại :</div>
          <Input
            style={{ height: 50, width: 400 }}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </div>
        <div className="infor-v">
          <div className="infor-name">Thông điệp :</div>
          <Input
            style={{ height: 150, width: 400 }}
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </div>
        <Button className="infor-button" style={{ width: 100 }} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ProductLab2;
