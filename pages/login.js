import React from 'react'
import styles from '../styles/main.module.css'
import loginBackground from "../public/loginBackground.jpg";
export default function login() {

  return (
    

    <div style={{backgroundImage: `url(${loginBackground.src})` }} className={styles.BAckgroundimage}>
    <div className={styles.loginBox} >
        <h1 > Login</h1>
        <form method="post" action="dashboard">
            <div className={'form-group'}>
                <label for="username" style={{textAlign:'left', fontSize:'smaller'}}>Username</label>
                <input type="text" name="username" id="username" placeholder="Username" />
            </div>
            <div className={'form-group'}>
                <label for="password" style={{textAlign:'left', fontSize: 'smaller'}}>Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your Password" />
            </div>
            <input type="submit" value="Login1" name="submit" className={`btn btn-primary btn-block` } />
            <input type="button" className={`btn btn-secondary`} href="http://127.0.0.1:5500/dashboard" value="Login Pro"/>
            {/* <!-- <button type="button" class="btn btn-success">Success</button> --> */}
        </form>
        
      <p><a href="http://127.0.0.1:5500/ForgetPassword">Forgot password?</a></p>  
    </div>
</div>


  )
}
