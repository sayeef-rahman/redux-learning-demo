import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCartAction } from '../../Redux/Actions/cartAction';
import SingleCartItem from './SingleCartItem';
import './Cart.css';

const Cart = ({ cartVisibility }) => {
  const cart = useSelector((state) => state?.cart);
  console.log('Cart:',cart.length)
  const dispatch = useDispatch();

  // Cart Reset Function
  const resetCart = () => {
    // dispatch({ type: 'RESET_CART' }); //Working
    dispatch(resetCartAction()); //working
  };

  useEffect(() => {
    // console.log('cart from local Storage:', cart);
  }, [cart]);

  return (
    <div
      className={
        cartVisibility
          ? 'cart-container text-center d-block'
          : 'cart-container text-center d-none'
      }
    >
      <h5 className={cart.length === 0 ? 'd-none bg-inherit' : 'd-block'}>Cart Items</h5>
      {cart?.map((cartItem) => (
        <SingleCartItem key={cartItem.id} cartItem={cartItem}></SingleCartItem>
      ))}

      {cart?.length ? (
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
