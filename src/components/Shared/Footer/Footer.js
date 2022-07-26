import {
  FaFacebook,
  FaCcVisa,
  FaInstagram,
  FaTwitter,
  FaGooglePlus,
  FaYoutube,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
  FaCcAmazonPay
} from 'react-icons/fa';
import {SiGooglepay} from 'react-icons/si';
import { BsFacebook } from 'react-icons/bs';
import React from 'react';
import { faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='py-5 footer-background-color w-100' id='footer'>
      <div className='container mx-auto w-75 p-0'>
        {/* Footer Top Section */}
        <div className='row'>
          <div className='col-sm-1 col-md-6 col-lg-6 col-xl-3 col-xxl-3'>
            <h6 className=''>ABOUT US</h6>
            <p className='footer-font text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet, nulla et dictum interdum,Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
              interdum,
            </p>
            <h6>FOLLOW US ON SOCIAL:</h6>
            <div className='social-media-btn'>
              <a href='www.facebook.com' className='me-2'>
                <FaFacebook className='fs-2 social-medi-button'></FaFacebook>
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
          </div>
          {/* products */}
          <div className='col-sm-1 col-md-6 col-lg-6 col-xl-3 col-xxl-3 ps-lg-5'>
            <h6>PRODUCTS</h6>
            <div>
              <ul className='list-unstyled text-white text-decoration-none'>
                <li>
                  <a href='google.com' className='footer-links'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Secure Payment
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Price Drop
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    New Products
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Best Sales
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Our Company */}
          <div className='col-sm-1 col-md-6 col-lg-6 col-xl-3 col-xxl-3'>
            <h6>OUR COMPANY</h6>
            <div>
              <ul className='list-unstyled text-white text-decoration-none'>
                <li>
                  <a href='google.com' className='footer-links'>
                    Delivery
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Legal Notice
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Stories
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Your Account */}
          <div className='col-sm-1 col-md-6 col-lg-6 col-xl-3 col-xxl-3'>
            <h6>YOUR ACCOUNT</h6>
            <div>
              <ul className='list-unstyled text-white text-decoration-none'>
                <li>
                  <a href='google.com' className='footer-links'>
                    Addresses
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Credit slips
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Orders
                  </a>
                </li>
                <li>
                  <a href='google.com' className='footer-links'>
                    Personal info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text & icom element */}
      <hr style={{ marginTop: '100px' }} className='w-75 mx-auto' />

      {/* Footer Bottom Sectio */}
      <div className='w-75 mx-auto'>
        <div className='d-flex pt-4 justify-content-between align-items-center text-cenetr'>
          <div>
            <h6 style={{fontSize: '12px'}}><span>Copyright © 2022</span> Sindabad. <span>All Rights Reserved</span></h6>
          </div>
          <div>
            <FaCcVisa className='fs-2 mx-1 text-white'></FaCcVisa>
            <FaCcMastercard className='fs-2 mx-1 text-white'></FaCcMastercard>
            <FaCcPaypal className='fs-2 mx-1 text-white'></FaCcPaypal>
            <SiGooglepay className='fs-2 mx-1 text-white'></SiGooglepay>
            <FaCcApplePay className='fs-2 mx-1 text-white'></FaCcApplePay>
            <FaCcAmazonPay className='fs-2 mx-1 text-white'></FaCcAmazonPay>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
