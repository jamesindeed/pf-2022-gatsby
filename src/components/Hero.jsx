import React from "react"
import "../styles/hero.scss"

const Hero = () => {
  return (
    <section className="hero-container" data-scroll-section>
      <ul className="hero-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Projects</li>
      </ul>

      <h1 id="hero-text">James Troughton</h1>
    </section>
  )
}

export default Hero
