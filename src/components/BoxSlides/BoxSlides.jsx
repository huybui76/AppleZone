import React from "react";
import appleIcon from "../../assets/apple.jpg";
import { productData } from "../../constants/list";
import { productData1 } from "../../constants/list";
import { productData2 } from "../../constants/list";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import "./BoxSlides.css";


const BoxSlides = (props) => {
      // Component cho nút previous
      const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="custom-prev-arrow" onClick={onClick}>
          </div>
        );
      };
    
      // Component cho nút next
      const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
          <div className="custom-next-arrow" onClick={onClick}>
          </div>
        );
      };
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
      <div className="box-slide">
        <a
          href="https://youtu.be/dQw4w9WgXcQ"
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">iPhone</h2>
        </a>
        <div className="blocks-display">
          <Slider {...settings}>
            {productData.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                totalSales={product.totalSales}
                timeLeft={product.timeLeft}
                rating={product.rating}
                discount={product.discount}
              />
            ))}
          </Slider>

        </div>
      </div>
      <div className="box-slide">
        <a
          href="https://youtu.be/dQw4w9WgXcQ"
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">Watch</h2>
        </a>
        <div className="blocks-display">
          <Slider {...settings}>
            {productData1.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                totalSales={product.totalSales}
                timeLeft={product.timeLeft}
                rating={product.rating}
                discount={product.discount}
              />
            ))}
          </Slider>

        </div>
      </div>
      <div className="box-slide">
        <a
          href="https://youtu.be/dQw4w9WgXcQ"
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">iPad</h2>
        </a>
        <div className="blocks-display">
          <Slider {...settings}>
            {productData2.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                totalSales={product.totalSales}
                timeLeft={product.timeLeft}
                rating={product.rating}
                discount={product.discount}
              />
            ))}
          </Slider>

        </div>
      </div>
    </div>
  );
};

export default BoxSlides;
