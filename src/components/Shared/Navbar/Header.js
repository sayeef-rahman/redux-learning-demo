import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  //Cart items
  const cart = useSelector((state) => state.cart);
  console.log('Header Products:', cart);

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              alt=''
              src='https://img.freepik.com/premium-vector/online-shop-logo-designs-concept-vector-online-store-logo-designs_7649-661.jpg?w=2000'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
            Online Shop
          </Navbar.Brand>
          <div>
            <Navbar.Brand href='#home'>Home</Navbar.Brand>
            <Navbar.Brand href='#home'>Shop</Navbar.Brand>
            <Navbar.Brand href='#home'>Men</Navbar.Brand>
            <Navbar.Brand href='#home'>Women</Navbar.Brand>
            {/* Cart Logo */}
            <Navbar.Brand>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='badge badge-warning' id='lblCartCount'>
                {cart.cartItems?.length}
              </span>
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
