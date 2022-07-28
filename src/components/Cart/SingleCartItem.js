import React from 'react';
import './SingleCartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/cartAction';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SingleCartItem = ({ cartItem }) => {
  const { cartQuantity, category, description, id, image, maxBuyQuantity, minBuyQuanity, price, rating, title } = cartItem;
  // dispatch an action
  const dispatch = useDispatch();

  const removeProductFromCart = (productID) => {
    let removeProduct = productID;
    // console.log("Remove Product ID: ", productID);
    dispatch(removeFromCart(productID));
  };

  return (
    <div className='d-flex justify-content-between my-2 product-container'>
      <img className='cart-image ms-2' src={image} alt='' />
      <div className='my-auto mx-2'>
        <h5 className='small-font mb-0'>{title}</h5>
        <h5 className='small-font mb-0 p-1'>Price: {price}</h5>
        <h5 className='small-font mb-0 p-1 pt-0'>Quantity: {cartQuantity}</h5>
        <h5 className='small-font mb-0 p-1 pt-0'>SUBTOTAL: {cartQuantity * price}</h5>
        <h5 className='small-font text-warning mb-0'>Min. QTY: {minBuyQuanity} & Max. QTY: {maxBuyQuantity}</h5>


      </div>
      <button
        className='btn-cart-remove m-0 p-0 pe-2'
        onClick={() => removeProductFromCart(id)}
      >
        <AiOutlineCloseCircle></AiOutlineCloseCircle>
      </button>
    </div>
  );
};

export default SingleCartItem;
