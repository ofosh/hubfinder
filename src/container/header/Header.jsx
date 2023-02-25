import React from 'react';
import highlight from '../../assets/highlight.png';
import vector from '../../assets/line.png';
import search from '../../assets/search.png';
import { Navbar } from '../../components';
import './header.css';

function Header() {
  return (
    <div className='hub__header section__padding' id='home'>
      <Navbar/>
      <div className='hub__header-content1'>
        <div className='hub__header-content1_img'>
          <img src={highlight} alt={highlight} />
        </div>
        
        <h1>
          DISCOVER <br/> WORKSPACE PROVIDERS <br/> NEAR YOU
        </h1>
      </div>

      <div className='hub__header-content2'>
        <div className='hub__header-text'>
          <p>
            Providing work-space to Enterprenuers and Freelancers around the world with just a click.
          </p>
          <img src={vector} alt="vector"/>
        </div>
        <div className='hub__header-content-search'>
          <img src={search} alt="search-bar" />
        </div>
      </div>

    </div>
  )
}

export default Header