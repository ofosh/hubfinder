import React from 'react';
import { f01, f02, f03, f04 } from './import';
import { Fcw } from '../../components'; 
import './feature.css';

function Feature() {
  return (
    <div className='hub__feature section__padding' id='feature'>
      <div className='hub__feature-content'>
        <div className='hub__feature-content_title'>
          <h1>Featured Company Workspace</h1>
          <button type='button'>View More</button>
        </div>
        <hr />
        <p>Work-Spaces own by big and influencial tech branches around the world.</p>
      </div>
      <div className='hub__feature-images'>
        <Fcw imgUrl={f01} title="Google"/>
        <Fcw imgUrl={f02} title="Slack"/>
        <Fcw imgUrl={f03} title="LinkedIn"/>
        <Fcw imgUrl={f04} title="Facebook"/>
      </div>
    </div>
  )
}

export default Feature