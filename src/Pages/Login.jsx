import React from 'react'
import './login.scss'


const Login = () => {
  return (
    <>
       <div className="container">
          <div className="left">
            <div className="header">
              <div className="title">Welcome back</div>
              <div className="description">Welcome back! Please enter your details </div>
            </div>
           
            <div className="form">
              <div className="inputbox">
                <span>Email</span>
              <input type="text" placeholder='Enter your email' />
              </div>

              <div className="inputbox">
                <span>Password</span>
              <input type="password" placeholder='Enter your password' />
              </div>

              <div className="links">
                  <span>Forgot Password? </span>
              </div>

              <div className="inputbox boton">
                  <input type="submit" value="Sing in" />
              </div>
            </div>
              
          </div>

          <div className="right">
            <div className="content">
              <div className="info">"No matter how high a mountain is, there is always a way to the top."</div>
              <div className="name">Artesano</div>
              <div className="heading">Carob furniture</div>
            </div>
          </div>
       </div>
    </>
  )
}

export default Login