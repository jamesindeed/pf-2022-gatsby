import React, { useEffect, useRef, useState } from "react"
import useRandomInterval from "../hooks/useRandomInterval"
import { gsap, Circ } from "gsap"
import "../styles/loader.scss"

const Loader = ({ setLoaded }) => {
  const [percent, setPercent] = useState(0)
  let minMax = percent < 97 ? [10, 50] : [250, 500]

  let tl = gsap.timeline()
  let sectionContainer = useRef(null)

  useEffect(() => {
    if (percent === 100) {
      tl.to(
        sectionContainer,
        {
          height: 0,
          ease: Circ.easeInOut,
          duration: 1.2,
          onComplete: () => setLoaded(true),
        },
        "+=0.3"
      )
    }
  }, [percent])

  useRandomInterval(
    () => percent < 100 && setPercent(percent => percent + 1),
    ...minMax
  )

  return (
    <section className="section-loader" ref={el => (sectionContainer = el)}>
      <div className="loader-overflow">
        <div className="loader-text">{percent}%</div>
      </div>
      <div className="loader-bar" style={{ width: `${percent}%` }} />
    </section>
  )
}

export default Loader
