import React, { useState, useEffect } from "react";
import appleIcon from "../../assets/apple.jpg";
import * as ProductService from "../../services/ProductService";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "./BoxSlides.css";

const BoxSlides = () => {
  const [products, setProducts] = useState({
    iphone: [],
    ipad: [],
    watch: [],
    mac: [],
    air: [],
  });

  const CustomPrevArrow = (props) => <div className="custom-prev-arrow" onClick={props.onClick}></div>;
  const CustomNextArrow = (props) => <div className="custom-next-arrow" onClick={props.onClick}></div>;

  const settings = {
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

  const fetchProducts = async (type, limit, category) => {
    const res = await ProductService.getProductsType(type, 0, limit);
    if (res?.status === "OK") {
      setProducts((prevProducts) => ({ ...prevProducts, [category]: res?.data }));
    }
  };

  useEffect(() => {
    fetchProducts("6564aee73adaf4c11a499a6b", 8, 'iphone');
    fetchProducts("6564aefd3adaf4c11a499a72", 8, 'ipad');
    fetchProducts("6564af133adaf4c11a499a7c", 8, 'mac');
    fetchProducts("6564af273adaf4c11a499a89", 8, 'tai nghe');
    fetchProducts("6564af3f3adaf4c11a499a99", 8, 'phụ kiện');
  }, []);
  console.log("daaaaaaaaaaa", products)

  const renderProductCards = (products) => {
    if (!products || !Array.isArray(products)) {
      return null; // or an empty array, depending on your preference
    }
    console.log("DDDDDD", products)

    return products.map((product) => (
      <ProductCard
        key={product._id}
        productId={product._id}
        image={product.image}
        name={product.name}
        price={product.price}
        totalSales={product.totalSales}
        timeLeft={product.timeLeft}
        rating={product.rating}
        discount={product.discount}
      />
    ));
  };


  return (
    <div>
      {["iPhone", "Ipad", "Mac", "Tai nghe", "Phụ Kiện"].map((category, index) => (
        <div className="box-slide" key={index}>
          <a className="logo-cate">
            <img src={appleIcon} alt="search icon" style={{ width: "27px", color: "white", paddingBottom: '9px' }} />
            <h2 className="titleText">{category}</h2>
          </a>
          <div className="blocks-display">
            {/* <Slider {...settings}> */}
            {renderProductCards(products[category.toLowerCase()])}
            {/* </Slider> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxSlides;
