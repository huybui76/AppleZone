import React, { useState, useEffect } from "react";
import appleIcon from "../../assets/apple.jpg";
import { productData } from "../../constants/list";
import { productData1 } from "../../constants/list";
import Loading from "../Loading/Loading";
import { productData2 } from "../../constants/list";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import "./BoxSlides.css";
import * as ProductService from "../../services/ProductService";


const BoxSlides = (props) => {
  const [loadingIphone, setLoadingIphone] = useState(false)
  const [iphones, setIphones] = useState([]);
  const [loadingIpad, setLoadingIpad] = useState(false)
  const [watchs, setWatchs] = useState([]);
  const [loadingWatch, setLoadingWatch] = useState(false)
  const [ipads, setIpads] = useState([]);
  const [loadingMac, setLoadingMac] = useState(false)
  const [macs, setMacs] = useState([]);
  const [loadingAir, setLoadingAir] = useState(false)
  const [airs, setAirs] = useState([]);
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
  const fetchProductsIphone = async (type, limit) => {
    setLoadingIphone(true);
    const res = await ProductService.getProductsType(type, 0, limit);
    if (res?.status == "OK") {
      setLoadingIphone(false);
      setIphones(res?.data);
    } else {
      setLoadingIphone(false);
    }
  }
  const fetchProductsAir = async (type, limit) => {
    setLoadingIphone(true);
    const res = await ProductService.getProductsType(type, 0, limit);
    if (res?.status == "OK") {
      setLoadingAir(false);
      setAsetLoadingAirs(res?.data);
    } else {
      setLoadingAir(false);
    }
  }
  const fetchProductsIpad = async (type, limit) => {
    setLoadingIpad(true);
    const res = await ProductService.getProductsType(type, 0, limit);
    if (res?.status == "OK") {
      setLoadingIpad(false);
      setIpads(res?.data);
    } else {
      setLoadingIpad(false);
    }
  }
  const fetchProductsWatch = async (type, limit) => {
    setLoadingWatch(true);
    const res = await ProductService.getProductsType(type, 0, limit);
    if (res?.status == "OK") {
      setLoadingWatch(false);
      setWatchs(res?.data);
    } else {
      setLoadingWatch(false);
    }
  }
  const fetchProductsMac = async (type, limit) => {
    setLoadingWatch(true);
    const res = await ProductService.getProductsType(type, 0, limit);
    if (res?.status == "OK") {
      setLoadingMac(false);
      setMacs(res?.data);
    } else {
      setLoadingMac(false);
    }
  }
  useEffect(() => {
    fetchProductsIpad("6564aefd3adaf4c11a499a72", 8)
    fetchProductsIphone("6564aee73adaf4c11a499a6b", 8)
    fetchProductsWatch("6564af3f3adaf4c11a499a99", 8)
    fetchProductsMac("6564af133adaf4c11a499a7c",8)
    fetchProductsAir("6564af273adaf4c11a499a89",8)

  }, []);


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
          <Loading isLoading={loadingIphone}>
            <Slider {...settings}>
              {iphones.map((product) => (
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
              ))}
            </Slider>
          </Loading>

        </div>
      </div>
      <div className="box-slide">
        <a
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">Ipad</h2>
        </a>
        <div className="blocks-display">
          <Loading isLoading={loadingIpad}>
            <Slider {...settings}>
              {ipads.map((product) => (
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
              ))}
            </Slider>
          </Loading>
        </div>
      </div>
      <div className="box-slide">
        <a
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">Mac</h2>
        </a>
        <div className="blocks-display">
          <Loading isLoading={loadingMac}>
            <Slider {...settings}>
              {macs.map((product) => (
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
              ))}
            </Slider>
          </Loading>
        </div>
      </div>
      <div className="box-slide">
        <a
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">Tai nghe</h2>
        </a>
        <div className="blocks-display">
          <Loading isLoading={loadingAir}>
            <Slider {...settings}>
              {airs.map((product) => (
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
              ))}
            </Slider>
          </Loading>
        </div>
      </div>
      <div className="box-slide">
        <a
          className="logo-cate"
          target="_blank"
        >
          <img
            src={appleIcon}
            alt="search icon"
            style={{ width: "60px", color: "white" }}
          />
          <h2 className="titleText">Phụ kiện</h2>
        </a>
        <div className="blocks-display">
          <Loading isLoading={loadingWatch}>
            <Slider {...settings}>
              {watchs.map((product) => (
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
              ))}
            </Slider>
          </Loading>
        </div>
      </div>
      
    </div>
  );
};

export default BoxSlides;
