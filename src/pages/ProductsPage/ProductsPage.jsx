import React from "react";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { productData } from "../../constants/products";
import "./ProductsPage.css";
import { productData as productAttached } from "../../constants/attached";
import Slider from "react-slick";

const ProductsPage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div style={{ background: "#efefef" }}>
        <ProductDetail product={productData[0]} />
      </div>
      <div className="attached">
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>
          Phụ kiên nên có cho {productData[0].name}
        </p>
        <Slider {...settings}>
          {productAttached.map((product) => (
            <a className="product-slide">
              <img className="product-slide-image" src={product.image} alt="" />
              <p>{product.name}</p>
              <div className="product-slide-title" >
                <p>{(product.price - (product.price*product.discount)/100).toLocaleString("vi-VN")}đ</p>
                <p><strike>{product.price.toLocaleString("vi-VN")}đ</strike></p>
                <p>{product.discount}%</p>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsPage;
