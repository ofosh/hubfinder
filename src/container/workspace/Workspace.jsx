import React from 'react';
import { work01, work02, work03, work04, work05, work06 } from './import'
import './workspace.css';

function Workspace() {
  return (
    <div className='hub__workspace section__padding' id='workspace'>
      <div className='hub__workspace-content'>
        <div className='hub__workspace_text'>
          <h1>Available Workspaces</h1>
          <hr />
          <p>Wide range of Space preference for your comfortability</p>
        </div>
        <div className='hub__workspace-images'>
          <div className='hub__workspace-items'>
            <div>
              <img src={work01} alt="Workspace"/>
              <p className="vm" >Open Space</p>
            </div>
            
            <div>
              <img src={work03} alt="Workspace"/>
              <p className="vm">Conference Room</p>
            </div>

            <div>
              <img src={work02} alt="Workspace"/>
              <p className="vm">Private Office</p>
            </div>

            <div>
              <img src={work04} alt="Workspace"/>
              <p className="vm">Co-working Space</p>
            </div>
            
            <div>
              <img src={work05} alt="Workspace"/>
              <p className="vm">Reception</p>
            </div>

            <div>
              <img src={work06} alt="Workspace"/>
              <p className="vm">Open Office</p>
            </div>
          </div>
            
          
            
        </div>
      </div>
      
    </div>
  )
}

export default Workspace