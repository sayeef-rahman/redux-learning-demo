import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleCartItem from './SingleCartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const resetCart = () => {
    // dispatch(resetCartAction());
    // dispatch({ type: "RESET_CART" }); //Working
    dispatch(resetCartAction());
  };
  // console.log('Cart Items:', cart);

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div>
      <h5>Cart Items</h5>
      {cart.cartItems.map((cartItem) => (
        <SingleCartItem key={cartItem.id} cartItem={cartItem}></SingleCartItem>
      ))}

      {cart.cartItems?.length ? (
        <button onClick={resetCart}>Reset Cart</button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Cart;
