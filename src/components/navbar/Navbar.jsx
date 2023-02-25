import React from 'react';
import Logo from '../../assets/logo.png';
import './navbar.css';

const Links = () => (
  <>
    <p><a href='#home' className='active'>Home</a></p>
    <p><a href='#pricing'>Pricing</a></p>
    <p><a href='#workspace'>Workspace</a></p>
    <p><a href='#blog'>Blog</a></p>
  </>
);

function Navbar() {

  return (
    <div className='hub__navbar'>
      <div className='hub__navbar-content'>
        <div className='hub__navbar-content_image'>
          <img src={Logo} alt="logo" />
        </div>
          
        <div className='hub__navbar-content_links'>
          <Links />
        </div>

        <div className='hub__navbar-sign'>
          <p>Login/Signup</p>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar