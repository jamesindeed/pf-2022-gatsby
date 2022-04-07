import React, { useEffect, useRef, useState } from "react"
import useOnScreen from "../hooks/useOnScreen"
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
        { y: 150, opacity: 0 },
        {
          duration: 1,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2",
        }
      )
    }
  }, [reveal])

  function scrollToSection(section) {
    if (window !== "undefined") {
      window.scroll.scrollTo(document.querySelector(`#${section}`))
    }
  }

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
              <button>
                <a href="https://github.com/jamesindeed" target="_blank">
                  GitHub
                </a>
              </button>
            </li>
            <li className="footer-link-wrapper">
              <button>
                <a
                  href="https://www.linkedin.com/in/james-troughton/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </button>
            </li>
            <li className="footer-link-wrapper">
              <button>
                <a href="https://www.facebook.com/jamesindeed/" target="_blank">
                  Facebook
                </a>
              </button>
            </li>
            <li className="footer-link-wrapper">
              <button>
                <a href="mailto:y473j62ro@mozmail.com" className="footer-link">
                  Email
                </a>
              </button>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-link-wrapper">
              <button>
                <a onClick={() => scrollToSection("nav")}>Back to top</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
