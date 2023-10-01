import React from 'react';
import './ProductItem.css';


function ProductItem({ product }) {
  // const iphone15 = '../SalesMenu/images/black__efg76fuz5hm6_large.jpg';
  return (
    <div className='product-container'>
      <div className="img-container">
        <div className="sales-percentage">{product.sales_percentage}</div>
        <div className="product-img">
          <img src={product.img} alt={product.name} />
        </div>
      </div>
      <div className='product-name'>{product.name} </div>
      <div className="product-price">
        <div className="sales-price">{product.sales_price} Đ</div>
        <div className="original-price">{product.original_price} Đ</div>
      </div>

    </div>
  );
}

export default ProductItem;