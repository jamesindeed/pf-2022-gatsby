import React, { useEffect, useRef, useState } from "react"
import useOnScreen from "../hooks/useOnScreen"
import SectionHeader from "./SectionHeader"
import gsap from "gsap"
import SplitText from "../utils/split-text.min"
import cn from "classnames"

import "../styles/footer.scss"

export default function Footer() {
  const ref = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref, 0.5)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      })
      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      })
      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          // opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      )
    }
  }, [reveal])

  return (
    <section className="footer" data-scroll-section>
      <div className="footer-container">
        <h1
          className={cn("location", { "is-reveal": reveal })}
          id="location-text"
          ref={ref}
        >
          LONDON, ENGLAND
        </h1>
        <div className="footer-col">
          <ul className="footer-list">
            <li className="footer-link-wrapper">
              <a href="/" className="footer-link">
                GitHub ➢
              </a>
            </li>
            <li className="footer-link-wrapper">
              <a href="/" className="footer-link">
                LinkedIn ➢
              </a>
            </li>
            <li className="footer-link-wrapper">
              <a href="/" className="footer-link">
                Facebook ➢
              </a>
            </li>
            <li className="footer-link-wrapper">
              <a href="/" className="footer-link">
                Email ➢
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-link-wrapper">
              <a href="/" className="footer-link">
                Back to top ➢
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
