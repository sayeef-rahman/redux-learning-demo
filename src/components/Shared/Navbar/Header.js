import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
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
            <Navbar.Brand href='#home'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='badge badge-warning' id='lblCartCount'> 5 </span>
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
