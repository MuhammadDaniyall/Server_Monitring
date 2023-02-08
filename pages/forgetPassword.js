import React, {useEffect, useState} from 'react'
import styles from '../styles/main.module.css'
import loginBackground from "../public/loginBackground.jpg";


export default function forgetPassword() {

  return (
    

    <div style={{backgroundImage: `url(${loginBackground.src})`, height:`${loginBackground.height}px` }} className={styles.BAckgroundimage}>
    <div className={styles.loginBox} >
          <h1> Forgot Password</h1>
          <form method="post" action="dashboard.html">
              <div className={`form-group`}>
                  <label style={{textAlign:'left', fontSize:'smaller'}}>Username</label>
                  <input type="text" name="username" id="username" placeholder="Username" />
              </div>
              
              <input type="submit" value="Submit" name="submit" className={`btn btn-primary btn-block`} />
              {/* <!-- <input type="button" class="btn btn-secondary" onclick="location.href='/dashboard.html'" value="Login Pro"> -->
              <!-- <button type="button" class="btn btn-success">Success</button> --> */}
          </form>
          
        <p><a href="http://127.0.0.1:5500/dani.html">Back to Login?</a></p>  
      </div>
  </div>


  )
}
