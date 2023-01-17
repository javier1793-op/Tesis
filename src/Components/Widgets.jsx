import React from 'react'
import "./widgets.scss"

const Widgets = () => {
  return (
    <>
    
    <div className="container">
        <div className="info">
            <div className="left-info">
                <div className="alert">
                <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <div className="description">Destocking due to sales</div>
            </div>
            <div className="right-info">
                <button>View</button>
            </div>
            
        </div>
       <div className="linea"></div>
        <div className="detalle">
            <div className="left-w">
                <div className="icon"><i class="fa-solid fa-street-view"></i></div>
                <div className="name">employee 1</div>
            </div>
            <div className="date">
            January 17 - 10:35 a.m.
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Widgets