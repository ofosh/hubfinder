import React from 'react'
import { Footer } from '../../components';
import './blog.css';

function Blog() {
  return (
    <div className='hub__blog section__padding' id='blog'>
      <div className='hub__blog-content'>
        <p>Subscribe Newsletters</p>
        <div className='hub__blog-content_input'>
          <input type="text" placeholder='Enter your Email'/>
          <button type='button'>Subscribe</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog