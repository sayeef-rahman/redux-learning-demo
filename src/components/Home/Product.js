import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartAction';
import './Product.css';

const Product = ({ product }) => {
  const { image, price, title, id } = product;

  //state
  // const cartCounter = useSelector(state => state.cartCounter)
  const dispatch = useDispatch();

  const addToShoppingCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='col-lg-3 col-md-4 col-6 mt-4'>
      {/* <h3>Product Name: {product.title}</h3> */}
      <Card className='h-100'>
        <Card.Img
          className='p-4 product-image mx-auto'
          variant='top'
          src={image}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h4>${price}</h4>
        </Card.Body>
        <div className='d-flex justify-content-evenly mb-2'>
          <button className='buy-btn fw-bold '>BUY NOW</button>
          <button
            className='cart-btn fw-bold'
            onClick={() => addToShoppingCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Product;

const mapDispatchToProps = () => {};
