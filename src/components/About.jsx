import React, { useEffect, useRef, useState } from "react"
import { SectionHeader } from "."
import { gsap } from "gsap/dist/gsap"
import SplitText from "../utils/split-text.min.js"
import useOnScreen from "../hooks/useOnScreen.js"
import cn from "classnames"
import "../styles/about.scss"

const About = () => {
  const ref = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)

  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", {
        type: "lines",
      })

      gsap.to(split.lines, {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      })
    }
  }, [reveal])

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      id="about"
      data-scroll-section
    >
      <SectionHeader title="about" />
      <p
        ref={ref}
        className={cn({
          "is-reveal": reveal,
        })}
        id="headline"
      >
        I am a software engineer with skills in both front end and back end
        development of websites and web applications. As the next step in my
        career I am looking to work with a small team of passionate people to
        create and design outstanding products for our clients.
      </p>
    </section>
  )
}

export default About
