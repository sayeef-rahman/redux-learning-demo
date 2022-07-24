import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useSelector } from 'react-redux';
import Cart from '../../Cart/Cart';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  //Cart items
  const cart = useSelector((state) => state.cart);
  // console.log('Header Products:', cart);
  const [cartVisibility, setCartVisibility] = useState(false);
  // Show Cart modal in Cart Button Click
  const showCart = () => {
    setCartVisibility(!cartVisibility);
  };

  //Logged in User
  const [user] = useAuthState(auth);
  if(user){
    console.log(user.photoURL);
  }
  else{
    console.log('No user found')
  }

  // User Logout
  const signOut = () => {
    signOut(auth);
  };

  //Show User Information
  const showUser = () =>{
    console.log('user clicked');
  }

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
            <Navbar.Brand onClick={() => showCart()}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='badge badge-warning' id='lblCartCount'>
                {cart.cartItems?.length}
              </span>
            </Navbar.Brand>

            {/* User Profile */}
            <Navbar.Brand>
              {
                user?<img src={user.photoURL} alt="user profile photo" className='' style={{width:"30px"}}/>:<FontAwesomeIcon icon={faUser} />
              }
              {/* <span className='badge badge-warning' id='lblCartCount'>
              </span> */}
            </Navbar.Brand>

            {/* Login Button */}
            <Navbar.Brand>{user? <button className="" onClick={signOut} >Sign Out</button> : <Link to="/login">Login</Link>}</Navbar.Brand>
            
          </div>
        </Container>
      </Navbar>
      {/* <Cart cartVisibility={cartVisibility}></Cart> */}
    </>
  );
};

export default Header;
