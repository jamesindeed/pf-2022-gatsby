import React, { useEffect } from "react"

import gsap from "gsap"
import SplitText from "../utils/split-text.min"
import "../styles/hero.scss"

const Hero = () => {
  useEffect(() => {
    const split = new SplitText("#hero-text", {
      type: "lines",
      linesClass: "lineChildren",
    })

    const splitParent = new SplitText("#hero-text", {
      type: "lines",
      linesClass: "lineParent",
    })

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    })
  }, [])

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
