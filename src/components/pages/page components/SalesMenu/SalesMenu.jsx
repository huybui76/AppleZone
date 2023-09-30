import React from 'react';
import './SalesMenu.css'
import ProductItem from '../ProductItem/ProductItem'; // Component hiển thị sản phẩm

const products = [
  { id: 1, name: 'Sản phẩm 1', description: 'Mô tả sản phẩm 1' },
  { id: 2, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
  { id: 3, name: 'Sản phẩm 3', description: 'Mô tả sản phẩm 3' },
  { id: 4, name: 'Sản phẩm 4', description: 'Mô tả sản phẩm 4' },
  { id: 5, name: 'Sản phẩm 5', description: 'Mô tả sản phẩm 5' },
  { id: 6, name: 'Sản phẩm 6', description: 'Mô tả sản phẩm 6' },
  // Thêm thông tin sản phẩm cho các sản phẩm khác
];

function Menu() {
  return (
    <div className='Menu'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Menu;
