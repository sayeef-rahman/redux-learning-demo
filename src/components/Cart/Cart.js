import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCartAction } from '../../Redux/Actions/cartAction';
import SingleCartItem from './SingleCartItem';
import './Cart.css';

const Cart = ({cartVisibility}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const resetCart = () => {
    // dispatch(resetCartAction());
    // dispatch({ type: "RESET_CART" }); //Working
    dispatch(resetCartAction());
  };

  return (
    <div className={cartVisibility ? 'cart-container text-center d-block' : 'cart-container text-center d-none'}>
      <h5 className=''>Cart Items</h5>
      {cart.cartItems.map((cartItem) => (
        <SingleCartItem key={cartItem.id} cartItem={cartItem}></SingleCartItem>
      ))}

      {cart.cartItems?.length ? (
        <button className='btn btn-primary' onClick={resetCart}>
          Reset Cart
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
