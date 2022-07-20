import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SingleCartItem from './SingleCartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log('Cart Items:', cart);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className='bg-warning'>
      <h4>Cart Items: {cart.cartItems.length}</h4>
      {cart.cartItems.map((cartItem) => (
        <SingleCartItem key={cartItem.id} cartItem={cartItem}></SingleCartItem>
      ))}
    </div>
  );
};

export default Cart;
