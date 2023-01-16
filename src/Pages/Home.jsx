import React from 'react'
import  './home.scss'
import Logo from './../img/logo.jpg'

const Home = () => {
  return (
    <>
    <div className="page">
        <div className="head">head</div>

        <div className="nav">
            <section className="headnav">
            <img src={Logo} alt="LOGO" />
              <div className="name">Family business</div>
            </section>

            <section className="element">
              <div className="title">
                <div className="icontitle"><i class="fa-solid fa-house-chimney"></i></div>
                <div className="area">Dashboard</div>
              </div>

              <div className="item">
                Beginning
              </div>
              <div className="title">
                <div className="icontitle"><i class="fa-solid fa-user"></i></div>
                <div className="area">Users</div>
              </div>

              <div className="item">
               Customers
              </div>
              <div className="item">
              Suppliers
              </div>
              <div className="title">
                <div className="icontitle"><i class="fa-solid fa-cart-shopping"></i></div>
                <div className="area">Activity</div>
              </div>

              <div className="item">
              Sales
              </div>
              <div className="item">
              Purchases
              </div>
                  <div className="title">
                <div className="icontitle"><i class="fa-solid fa-chart-simple"></i></div>
                <div className="area">Statistics</div>
              </div>

              <div className="item">
              Weekly
              </div>
            </section>
        </div>

        <div className="content">content</div>

        <div className="footer">
          <div className="autor">Front end - Ruíz Díaz Javier Alejandro</div>
          <div className="redes">
            <a href="https://github.com/javier1793-op" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/javier-alejandro-ruiz-diaz/"target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home