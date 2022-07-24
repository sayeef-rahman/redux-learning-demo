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
      <Card className='h-100 shadow'>
        <div>
        </div>
        <Card.Img
          className='p-4 product-image'
          variant='top'
          src={image}
        />
        <Card.Body>
          <Card.Title className='fs-6 text-center text-justify'>{title}</Card.Title>
          <h4 className='text-center'>${price}</h4>
        </Card.Body>
        <div className='mx-auto'>
          <div>
            <button className='buy-now-btn text-uppercase mb-3'>Buy Now</button>
          </div>
          <div>
            <button
              className='cart-btn  text-uppercase mb-3'
              onClick={() => addToShoppingCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;

const mapDispatchToProps = () => {};
