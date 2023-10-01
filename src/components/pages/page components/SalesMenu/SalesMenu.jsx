import React from 'react';
import './SalesMenu.css'
import ProductItem from '../ProductItem/ProductItem'; // Component hiển thị sản phẩm
import products from './dataProducts'; // Dữ liệu sản phẩm

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
