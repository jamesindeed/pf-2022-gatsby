import React, { useContext } from "react"
import "../styles/header.scss"
import CustomCursorContext from "../CustomCursor/context/CustomCursorContext"

const Header = () => {
  const { setType } = useContext(CustomCursorContext)

  function scrollToSection(section) {
    if (window !== "undefined") {
      window.scroll.scrollTo(document.querySelector(`#${section}`))
    }
  }

  return (
    <nav className="navbar" id="nav" data-scroll-section>
      <div className="navbar-container" data-scroll>
        <a
          onClick={() => scrollToSection("about")}
          onMouseEnter={() => setType("menu")}
          onMouseLeave={() => setType("default")}
        >
          <small>about</small>
        </a>
        <div className="navbar-logo">J|T</div>
        <a
          onClick={() => scrollToSection("work")}
          onMouseEnter={() => setType("menu")}
          onMouseLeave={() => setType("default")}
        >
          <small>work</small>
        </a>
      </div>
    </nav>
  )
}

export default Header
