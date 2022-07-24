import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='py-5 footer-background-color w-100' id='footer'>
      <div className='mx-auto'>
        <div className='d-flex'>
          <div>
            <h6>ABOUT US</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                egestas vitae scel
            </p>
          </div>
          <div>hi</div>
          <div></div>
          <div></div>
        </div>
        {/* Bottom text & icom element */}
        <div className='d-flex border-top border-warning pt-4 justify-content-between align-items'>
          <div>
            <h6>Copyright © 2022 Sindabad. All Rights Reserved</h6>
          </div>
          <div>
            <FontAwesomeIcon
              className='fs-3 mx-1'
              icon={faIdCard}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className='fs-3 mx-1'
              icon={faIdCard}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className='fs-3 mx-1'
              icon={faIdCard}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className='fs-3 mx-1'
              icon={faIdCard}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
