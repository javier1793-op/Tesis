import React from "react";
import Perfil from "./../img/perfil.png";
import "./head.scss"

const Head = () => {
  return (
    <>
      <div className="left-header">
        <div className="greenting"> Hi, Javier! </div>
        <i className="fa-regular fa-hand"></i>
      </div>
      <div className="right-head">
        <div className="mode">
          <i className="fa-solid fa-sun"></i>
        </div>
        <div className="description">
          <div className="noti">
            <i className="fa-solid fa-bell"></i>
            <div className="count">1</div>
          </div>
          <img src={Perfil} alt="perfil" />
        </div>
      </div>
    </>
  );
};

export default Head;
