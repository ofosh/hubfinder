import React from 'react'
import work from '../../assets/lady.jpg';
import { s1, s2, s3, s4 } from './import';
import './space.css';

function Space() {
  return (
    <div className='hub__space section__padding'>
      <div className='hub__space-content'>
        <div className='hub__space-image'>
          <img src={work} alt="work"/>
        </div>
        <div className='hub__space-cont'>
          <div className='hub__space-text'>
            <h1>Benefits of using Us</h1>
            <p>
              A well organise space that suit your need irrespective of what you want to do tranings, Workshops or Seminals
            </p>
          </div>

          <div className='hub__space-items'>
            <img src={s1} alt="space" />
            <img src={s2} alt="space" />
            <img src={s3} alt="space" />
            <img src={s4} alt="space" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Space