import React from "react"
import "../styles/header.scss"
import Logo from "../images/logo.png"

const Header = () => {
  return (
    <nav className="navbar" data-scroll-section>
      <div className="navbar-container" data-scroll>
        <small>menu</small>

        <img src={Logo} alt="logo" className="navbar-logo">
          {/* J|T */}
        </img>

        <small>work</small>
      </div>
    </nav>
  )
}

export default Header
