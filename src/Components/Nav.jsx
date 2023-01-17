import React from 'react'
import "./nav.scss"
import Logo from "./../img/logo.jpg"

const Nav = () => {
  return (
    <>
    <section className="headnav">
            <img src={Logo} alt="LOGO" />
            <div className="name">Family business</div>
          </section>

          <section className="element">
            <div className="title">
              <div className="icontitle">
                <i className="fa-solid fa-house-chimney"></i>
              </div>
              <div className="area">Dashboard</div>
            </div>

            <div className="item">Beginning</div>
            <div className="title">
              <div className="icontitle">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="area">Users</div>
            </div>

            <div className="item">Customers</div>
            <div className="item">Suppliers</div>
            <div className="title">
              <div className="icontitle">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="area">Activity</div>
            </div>

            <div className="item">Sales</div>
            <div className="item">Purchases</div>
            <div className="title">
              <div className="icontitle">
                <i className="fa-solid fa-chart-simple"></i>
              </div>
              <div className="area">Statistics</div>
            </div>

            <div className="item">Weekly</div>
          </section>
    </>
  )
}

export default Nav