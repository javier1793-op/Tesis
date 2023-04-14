import React from "react";
import "./nav.scss";
import Logo from "./../img/reciplas.png";
import { FcHome } from "react-icons/fc";
import { FcManager, FcShop,FcShipped ,FcBullish,FcFactory} from "react-icons/fc";

const Nav = () => {
  return (
    <>
      <section className="headnav">
        <img src={Logo} alt="LOGO" />
        <div className="name"></div>
      </section>

      <section className="element">
        <div className="title">
          <div>
            <FcHome className="icontitle" />
          </div>
          <div className="area homeItem">Dashboard</div>
        </div>
        <div className="title">
          <div>
            <FcManager className="icontitle" />
          </div>
          <div className="area">Users</div>
        </div>

        <div className="item">Records</div>
        <div className="title">
          <div className="icontitle">
            <FcShop className="icontitle" />
          </div>
          <div className="area ">Sale</div>
        </div>
        <div className="item">Orders</div>
        <div className="title">
          <div className="icontitle">
            <FcFactory className="icontitle" />
          </div>
          <div className="area homeItem">Production</div>
        </div>

        <div className="title">
          <div className="icontitle">
            <FcShipped className="icontitle" />
          </div>
          <div className="area homeItem">Shopping</div>
        </div>

        
        <div className="title">
          <div className="icontitle">
            
            <FcBullish className="icontitle" />
          </div>

          <div className="area">Statistics</div>
        </div>

      </section>
    </>
  );
};

export default Nav;
