import React from 'react';
import './Menu.css'
import ProductItem from '../ProductItem/ProductItem'; // Component hiển thị sản phẩm

const products = [
  { id: 1, name: 'Sản phẩm 1', description: 'Mô tả sản phẩm 1' },
  { id: 2, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
  { id: 3, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
  { id: 4, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
  { id: 4, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
  { id: 4, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2' },
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
