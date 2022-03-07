import React, { useEffect, useRef } from "react"
import { gsap, Power4, Expo } from "gsap"
// import SplitText from "../utils/split-text.min"
import "../styles/hero.scss"
import Image from "../images/hero-jn(small).jpg"

const Hero = () => {
  let tl = gsap.timeline()
  let topText = useRef([])
  let bottomText = useRef([])
  let image = useRef([])

  useEffect(() => {
    tl.from(topText.current, {
      duration: 1,
      scale: 0,
      yPercent: -100,
      delay: 0.3,
      ease: Expo.easeInOut,
      stagger: 0.02,
    })
      .fromTo(
        image,
        { scale: 1.3 },
        { scale: 1, ease: Expo.easeInOut, duration: 1.2 },
        "-=0.8"
      )
      .from(
        bottomText.current,
        {
          duration: 1,
          scale: 0,
          yPercent: -100,
          ease: Expo.easeInOut,
          stagger: 0.02,
        },
        "-=1"
      )
  }, [tl])

  return (
    <>
      <section className="hero-container" data-scroll-section>
        {/* <ul className="hero-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Projects</li>
      </ul> */}

        <h1 id="hero-text">
          <div ref={el => (topText.current[0] = el)}>J</div>
          <div ref={el => (topText.current[1] = el)}>A</div>
          <div ref={el => (topText.current[2] = el)}>M</div>
          <div ref={el => (topText.current[3] = el)}>E</div>
          <div ref={el => (topText.current[4] = el)}>S</div>
        </h1>
        <h1>
          <div ref={el => (bottomText.current[0] = el)}>T</div>
          <div ref={el => (bottomText.current[1] = el)}>R</div>{" "}
          <div ref={el => (bottomText.current[2] = el)}>O</div>
          <div ref={el => (bottomText.current[3] = el)}>U</div>
          <div ref={el => (bottomText.current[4] = el)}>G</div>
          <div ref={el => (bottomText.current[5] = el)}>H</div>
          <div ref={el => (bottomText.current[6] = el)}>T</div>
          <div ref={el => (bottomText.current[7] = el)}>O</div>
          <div ref={el => (bottomText.current[8] = el)}>N</div>
        </h1>
        <div className="image-wrapper">
          <div
            className="image-container"
            ref={el => (image = el)}
            data-scroll
            data-scroll-id="image"
          >
            <img
              className="styled-image"
              src={Image}
              data-scroll
              data-scroll-speed={-1}
              style={{ position: "absolute" }}
              critical
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
