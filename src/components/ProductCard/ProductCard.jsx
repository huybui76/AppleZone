import React from "react";
import { FaStar, FaFireAlt, FaShoppingCart, FaRegBookmark } from "react-icons/fa";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
  // Console log for debugging
  console.log('Product Card Props:', props);

  return (
    <NavLink to={`/products/${props.productId}`} className="productCard">
      <div className="element-container1">
        <img src={props.image[0]} alt="product" className="productImage" />
      </div>
      <div className="element-container2">
        <h3 className="title" style={{ fontSize: '1rem', lineHeight: '1.2' }}>{props.name}</h3>
        <div className="bottom">
          {props.discount && <p className="discount">{`${(props.price - (props.price * props.discount) / 100).toLocaleString('vi-VN')}₫`}</p>}
          {props.price && <p className="price">{`${props.price.toLocaleString('vi-VN')}₫`}</p>}
          {props.discount && <p className="percent">{`-${props.discount}%`}</p>}
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
