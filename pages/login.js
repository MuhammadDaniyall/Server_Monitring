import React, { useEffect, useState } from 'react'
import styles from '../styles/main.module.css'
import loginBackground from "../public/loginBackground.jpg"

export default function login() {
  const [screenHeight, setScreenHeight] = useState(0)

  useEffect(() => {
    setScreenHeight(window.innerHeight)
  }, []); 

  return (
    <div style={{height: `${screenHeight}px` }} className={styles.BAckgroundimage}>
      <div className={styles.loginBox} >
        <h1 > Login</h1>
        <form method="post" action="dashboard">
          <div >
            <label for="username" style={{ textAlign: 'left', fontSize: 'smaller' }}>Username</label>
            <input type="text" name="username" id="username" placeholder="Username" style={{background:'transparent', borderWidth:'0px 0px 1px 0px'}} />
          </div>
          <div >
            <label for="password" style={{ textAlign: 'left', fontSize: 'smaller' }}>Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your Password" style={{background:'transparent', borderWidth:'0px 0px 1px 0px'}} />
          </div>
          <input type="submit" value="Login1" name="submit"  style={{height:'40px', background:'#000', color:'#fff', fontSize:'18px', borderRadius:'20px'}} />
          {/* <input type="button" className={`btn btn-secondary`} href="http://192.168.100.177:3000/dashboard" value="Login Pro" /> */}
          {/* <!-- <button type="button" class="btn btn-success">Success</button> --> */}
        </form>

        <p><a href="http://192.168.100.177:3000/forgetPassword">Forgot password?</a></p>
      </div>
    </div>
  )
}
