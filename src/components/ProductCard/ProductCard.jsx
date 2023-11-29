import React from "react";
import {
  FaStar,
  FaFireAlt,
  FaShoppingCart,
  FaRegBookmark,
} from "react-icons/fa";
import "./ProductCard.css";
import { Link, NavLink } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <NavLink
      // to=`/products/${}`
      to={`/products/${props.productId}`}
      target="_blank"
      className="productCard"
    >
      <div className="element-container1">
        <img src={props.image[0]} alt="hello" className="productImage" />
      </div>
      <div  className="element-container2">
        <h3 className="title">{props.name}</h3>
        <div className="bottom">
          {/* <p className="discount">{props.price}đ</p>
          <p className="price">{props.price}đ</p>
          <p className="percent">-{props.discount}%</p> */}
          {props.discount ? <p className="discount">{`${(props.price - (props.price * props.discount) / 100).toLocaleString('vi-VN')}₫`}</p> : ''}
          {props.price ? <p className="price">{`${props.price.toLocaleString('vi-VN')}₫`}</p> : ''}
          {props.discount ? <p className="percent">{`-${props.discount}%`}</p> : ''}
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;

{
  /* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" key={props.id} className="productCard">
            <img
                src={props.image}
                alt="hello"
                className="productImage"
            ></img>
            <FaShoppingCart className={"productCard_cart"} />
            <FaRegBookmark className={"productCard_wishlist"} />
            <FaFireAlt className={"productCard_fastSelling"} />
            <div className="productCard_content">
                <h3 className="productName">{props.name}</h3>
                <div className="displayStack_1">
                    <div className="productPrice">${props.price}</div>
                    <div className="productSale">
                        {props.totalSales} units sold
                    </div>
                </div>
                <div className="displayStack_1">
                    <div className="productRating">
                        {[...Array(props.rating)].map((index) => (
                            <FaStar id={index + 1} key={index} />
                        ))}
                    </div>
                    <div className="productTime">
                        {props.timeLeft} days left
                    </div>
                </div>
            </div>
        </a> */
}
