import React from 'react'
import './fcw.css';

function Fcw({ imgUrl, title }) {
  return (
    <div className='hub__feature_fcw'>
      <div className='hub__feature-main_fcw'>
        <div className='hub__feature_fcw-img'>
          <img src={imgUrl} alt="features"/>
        </div>
        <div className='hub__feature_fcw-text'>
          <p>{title}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Fcw