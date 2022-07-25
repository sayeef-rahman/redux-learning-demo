import {
  FaFacebook,
  FaCcVisa,
  FaInstagram,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import React from 'react';
import { faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='py-5 footer-background-color w-100' id='footer'>
      <div className='container mx-auto w-75'>
        {/* Footer Top Section */}
        <div className='row'>
          <div className='col'>
            <h6 className=''>ABOUT US</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
            </p>
            <h6>FOLLOW US ON SOCIAL:</h6>
            <a href='www.facebook.com' className='me-2'>
              <FaFacebook className='fs-2'></FaFacebook>
            </a>
            <a href='www.facebook.com' className='me-2'>
              <FaInstagram className='fs-2'></FaInstagram>
            </a>
            <a href='www.facebook.com' className='me-2'>
              <FaGooglePlus className='fs-2'></FaGooglePlus>
            </a>
            <a href='www.facebook.com' className='me-2'>
              <FaTwitter className='fs-2'></FaTwitter>
            </a>
            <a href='www.facebook.com' className='me-2'>
              <FaYoutube className='fs-2'></FaYoutube>
            </a>
          </div>
          <div className='col'>
            <h6>PRODUCTS</h6>
            <div>
              <ul className='list-unstyled text-white text-decoration-none'>
                <li>
                  <a href='google.com'>About Us</a>
                </li>
                <li>
                  <a href='google.com'>Secure Payment</a>
                </li>
                <li>
                  <a href='google.com'>Price Drop</a>
                </li>
                <li>
                  <a href='google.com'>New Products</a>
                </li>
                <li>
                  <a href='google.com'>Best Sales</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <h6>OUR COMPANY</h6>
            <div>
              <ul className='list-unstyled text-white text-decoration-none'>
                <li>
                  <a href='google.com'>Delivery</a>
                </li>
                <li>
                  <a href='google.com'>Legal Notice</a>
                </li>
                <li>
                  <a href='google.com'>Contact Us</a>
                </li>
                <li>
                  <a href='google.com'>Sitemap</a>
                </li>
                <li>
                  <a href='google.com'>Stories</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col'>
            <h6>YOUR ACCOUNT</h6>
            <div>
              <ul className='list-unstyled text-white text-decoration-none'>
                <li>
                  <a href='google.com'>Addresses</a>
                </li>
                <li>
                  <a href='google.com'>Credit slips</a>
                </li>
                <li>
                  <a href='google.com'>Orders</a>
                </li>
                <li>
                  <a href='google.com'>Personal info</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom text & icom element */}
        <hr style={{ marginTop: '100px' }} />

        {/* Footer Bottom Sectio */}
        <div>
        <div className='d-flex pt-4 justify-content-between align-items'>
          <div>
            <h6>Copyright © 2022 Sindabad. All Rights Reserved</h6>
          </div>
          <div>
            <FaCcVisa className='fs-2 mx-1'></FaCcVisa>
            <FaCcVisa className='fs-2 mx-1'></FaCcVisa>
            <FaCcVisa className='fs-2 mx-1'></FaCcVisa>
            <FaCcVisa className='fs-2 mx-1'></FaCcVisa>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
