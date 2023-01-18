import React,{useState} from 'react'
import './login.scss'
import Home from './Home'

 const initailForm=
  {
    id:0,
    mail:"",
    pass:"",
    name:"",
    perfil:""
  }
 

const Login = () => {

  const [form,setForm]=useState(initailForm);

  console.log(form)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
     
    if (!form.mail || !form.pass) {
      alert("Datos incompletos");
      return;
    }
  };

  return (
    <>
       <div className="container">
          <div className="left">
            <div className="header">
              <div className="title">Welcome back</div>
              <div className="description">Welcome back! Please enter your details </div>
            </div>
           
            <form 
            className="form"
            onSubmit={handleSubmit}>
              <div className="inputbox">
                <span>Email</span>
              <input 
              type="text" 
              name='mail'
              placeholder='Enter your email'
              onChange={handleChange}
              value={form.mail}
               />
              </div>

              <div className="inputbox">
                <span>Password</span>
              <input 
              type="password" 
              name='pass'
              placeholder='Enter your password'
              onChange={handleChange}
              value={form.pass}
               />
              </div>

              <div className="links">
                  <span>Forgot Password? </span>
              </div>

              <div className="inputbox boton">
                  <input type="submit" value="Sing in" />
              </div>
            </form>
              
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