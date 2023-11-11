import React from 'react'
import './CartList.css'
import item_list from './cartProduct_data';
import CartItem from '../CartItem/CartItem';

function CartList() {
    return (


      <div className='CartList'>


        {item_list.map((item) => (


          <CartItem key={item.id} item={item} />  
          
        
        ))}
      
      
      </div>
  
    );
  }
  
export default CartList;