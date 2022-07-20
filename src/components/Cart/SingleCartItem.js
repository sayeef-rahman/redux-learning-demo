import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './SingleCartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/cartAction';


const SingleCartItem = ({ cartItem }) => {
  const { id, image, title, price } = cartItem;
  console.log('Single Cart Item: ', cartItem);

  // Get current state from reducer
  const cart = useSelector((state) => state.cart);
  console.log('Cart Items (in SingleCart):', cart);
  
  // dispatch an action
  const dispatch = useDispatch();

  const removeProductFromCart = (productID) => {
    let removeProduct = productID;
    dispatch(removeFromCart(productID)); 
  };

  return (
    <div className='d-flex justify-content-between my-2 cart-container'>
      <img className='cart-image' src={image} alt='' />
      <div className='my-auto'>
        <h5>{title}</h5>
        <h5>Price: {price}</h5>
      </div>
      <button
        className='btn-cart-remove'
        onClick={() => removeProductFromCart(id)}
      >
        <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default SingleCartItem;
