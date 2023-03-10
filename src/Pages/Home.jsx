import React from "react";
import "./home.scss";
import Head from "../Components/Head";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <>
      <div className="page">
        <div className="head"><Head/></div>

        <div className="nav"><Nav/></div>

        <div className="content">
        <div className="title">Ultimas Actividades</div>
         
          </div>

        <div className="footer"><Footer/></div>
      </div>
    </>
  );
};

export default Home;
