import React, {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
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
  const [counter, setCounter] = useState(0);

   let lastCount = useSelector((state) => state.cart.length);


  // console.log('cart State', cart);
  const [cartVisibility, setCartVisibility] = useState(false);
  // Show Cart modal in Cart Button Click
  const showCart = () => {
    setCartVisibility(!cartVisibility);
  };

  useEffect(() => {
    // console.log("initial call")
    // Cart items
    let localItem = JSON.parse(localStorage.getItem('carts'));
    if(localItem){

      setCounter(JSON.parse(localStorage.getItem('carts')).length);
    }
  }, [lastCount]);


  //Logged in User
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user.photoURL);
  } else {
    // console.log('No user found');
  }

  // User Logout
  const logOut = () => {
    signOut(auth);
  };

  //Show User Information
  const showUser = () => {
    console.log('user clicked');
  };

  return (
    <div className='navbar-header-container'>
      <Navbar className='my-auto py-auto' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='text-white text-decoration-none'>
              <img
                alt=''
                src='https://img.freepik.com/premium-vector/online-shop-logo-designs-concept-vector-online-store-logo-designs_7649-661.jpg?w=2000'
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              Online Shop
            </Link>
          </Navbar.Brand>
          <div>
            <Navbar.Brand href='/' className='fs-6'>
              Home
            </Navbar.Brand>
            <Navbar.Brand href='#home' className='fs-6'>
              Shop
            </Navbar.Brand>
            <Navbar.Brand href='#home' className='fs-6'>
              Men
            </Navbar.Brand>
            <Navbar.Brand href='career' className='fs-6'>
              Career
            </Navbar.Brand>

            {/* Show Cart in NavBar  */}
             <Navbar.Brand onClick={() => showCart()}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='badge badge-warning' id='lblCartCount'>
                {counter}
              </span>
            </Navbar.Brand>

            {/* User Profile */}
            <Navbar.Brand className=''>
              {user ? (
                <img
                  src={user?.photoURL}
                  alt='user'
                  className='m-0 p-0 rounded rounded-circle'
                  style={{ width: '30px' }}
                />
              ) : (
                <FontAwesomeIcon icon={faUser} />
              )}
               <span className='badge badge-warning' id='lblCartCount'>
              </span>
            </Navbar.Brand>

            {/* Login Button */}
            <Navbar.Brand>
              {user ? (
                <button className='fd-6 border-0' onClick={logOut}>
                  Sign Out
                </button>
              ) : (
                <Link
                  to='/login'
                  className='text-white fs-6 text-decoration-none'
                >
                  Login
                </Link>
              )}
            </Navbar.Brand>
          </div>
        </Container>
      </Navbar>
       <Cart cartVisibility={cartVisibility}></Cart>
    </div>
  );
};

export default Header;
