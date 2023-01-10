import React from 'react'
import './login.scss'


const Login = () => {
  return (
    <>
       <div className="conteiner">
        <div className="box"> 
            <div className="cover"></div>
            <div className="shadow"></div>
            <div className="content">
              <div className="form">
                <h3 className="logo"><i class="fa-solid fa-door-open"></i></h3>
                <h2>Sing in</h2>
                <div className="inputBox">
                  <input type="text" required />
                  <i class="fa-solid fa-user"></i>
                  <span>Username</span>
                </div>
                <div className="inputBox">
                  <input type="password" required />
                  <i class="fa-solid fa-key"></i>
                  <span>Password</span>
                </div>
                <div className="links">
                
                  <a href="#">Forgot Password </a>
                  <i class="fa-solid fa-question"></i>
                </div>
                <div className="inputBox">
                  <input type="submit" value="Login" />
                </div>
              </div>
            </div>
            
        </div>
       </div>
    </>
  )
}

export default Login