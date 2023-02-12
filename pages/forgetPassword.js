import React, {useEffect, useState} from 'react'
import styles from '../styles/main.module.css'
import loginBackground from "../public/loginBackground.jpg";


export default function forgetPassword() {

  return (
    

    <div style={{backgroundImage: `url(${loginBackground.src})`, height:`${loginBackground.height}px` }} className={styles.BAckgroundimage}>
    <div className={styles.loginBox} >
          <h1> Forgot Password</h1>
          <form method="post" action="dashboard.html">
              <div >
                  <label style={{textAlign:'left', fontSize:'smaller'}}>Username</label>
                  <input type="text" name="username" id="username" placeholder="Username" style={{background:'transparent', borderWidth:'0px 0px 1px 0px'}} />
              </div>
              
              <input type="submit" value="Submit" name="submit" style={{height:'40px', background:'#000', color:'#fff', fontSize:'18px', borderRadius:'20px'}} />
              {/* <!-- <input type="button" class="btn btn-secondary" onclick="location.href='/dashboard.html'" value="Login Pro"> -->
              <!-- <button type="button" class="btn btn-success">Success</button> --> */}
          </form>
          
        <p><a href="http://192.168.100.177:3000/login">Back to Login?</a></p>  
      </div>
  </div>


  )
}
