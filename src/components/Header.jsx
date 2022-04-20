import React from "react"
import "../styles/header.scss"

const Header = () => {
  function scrollToSection(section) {
    if (window !== "undefined") {
      window.scroll.scrollTo(document.querySelector(`#${section}`))
    }
  }

  return (
    <nav className="navbar" id="nav" data-scroll-section>
      <div className="navbar-container" data-scroll>
        <a onClick={() => scrollToSection("about")}>
          <small>about</small>
        </a>
        <div className="navbar-logo">J|T</div>
        <a onClick={() => scrollToSection("work")}>
          <small>work</small>
        </a>
      </div>
    </nav>
  )
}

export default Header
