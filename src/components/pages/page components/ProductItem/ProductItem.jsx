import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className='product-container'>
      <div className="img-container">
        <div className="sales-percentage">-40%</div>
      </div>
      <div className='product-name'>{product.name}</div>
      <div className="product-price">
        <div className="sale-price">1.800.000 Đ</div>
        <div className="original-price">2.000.000 Đ</div>
      </div>

    </div>
  );
}

export default ProductItem;