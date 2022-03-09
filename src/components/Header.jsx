import React from "react"
import "../styles/header.scss"

const Header = () => {
  return (
    <nav className="navbar" data-scroll-section>
      <div className="navbar-container" data-scroll>
        <small>menu</small>

        <div className="navbar-logo">J|T</div>

        <small>blog</small>
      </div>
    </nav>
  )
}

export default Header
