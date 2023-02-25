import React from 'react';
import footerImg from '../../assets/logo.png';
import './footer.css';

function Footer() {
  return (
    <div className='hub__footer'>
      <div className='hub__footer-content1'>
        <div className='hub__footer-c1'>
          <h4>About Us</h4>
          <h4>Discover</h4>
          <h4>Explore</h4>
          <h4>Books</h4>
        </div>

        <div className='hub__footer-c1'>
          <h4>About Us</h4>
          <h4>Discover</h4>
          <h4>Explore</h4>
          <h4>Books</h4>
        </div>

      </div>
      <hr />
      <div className='hub__footer-content2'>
        <h4>© 2022 ABC. All rights reserved.</h4>
        <img src={footerImg} alt="footer"/>
        <div className='hub__footer-text'>
          <h4>Terms of Service</h4>
          <h4>Privacy Policy</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer