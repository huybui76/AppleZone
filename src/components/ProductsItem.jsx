import React from 'react'

function ProductsSItem({ product }) {
    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {/* Thêm các thông tin sản phẩm khác vào đây */}
      </div>
    );
  }

export default ProductsSItem