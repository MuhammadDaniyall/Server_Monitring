import React from 'react'

export default function dashboard() {
  return (
    <div style={{}}>
      <div className={`container`}>
    <h3>Server Landing Page</h3>
 
    <div className={`container`}>
      <h3>Our servers that are available:</h3>
      
    </div>
  </div> 
  
  <div className={`container-fluid`}>
    <div className={`row`}>
      
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Linux Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Red Hat Enterprise Linux</li>
              <li>CentOS</li>
              <li>Ubuntu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Windows Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Windows Server 2012</li>
              <li>Windows Server 2012</li>
              <li>Windows Server 2012</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card bg-primary`}>
          <div className={`card-heading`}>Linux Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Red Hat Enterprise Linux</li>
              <li>CentOS</li>
              <li>Ubuntu</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={`col-lg-3 col-md-4 col-sm-6`}>
        <div className={`card text-bg-primary`}>
          <div className={`card-heading`}>Windows Server</div>
          <div className={`card-body`}>
            <ul>
              <li>Windows Server 2012</li>
              <li>Windows Server 2012</li>
              <li>Windows Server 2012</li>
            </ul>
          </div>
        </div>
      </div>
      
      
      
    </div>
    
  </div>
  </div>
  )
}
