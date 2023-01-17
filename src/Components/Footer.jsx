import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <>
    <div className="autor">Front end - Ruíz Díaz Javier Alejandro</div>
          <div className="redes">
            <a href="https://github.com/javier1793-op" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/javier-alejandro-ruiz-diaz/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
    </>
  )
}

export default Footer