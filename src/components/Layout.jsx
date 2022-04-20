import React, { useRef, useState } from "react"
import "../styles/globals.scss"
import "../styles/scroll.scss"
import PropTypes from "prop-types"
import CustomCursor from "../CustomCursor"
import SmoothScroll from "../hooks/smoothScroll"
import { MobileMessage, Loader } from "../components"
import { gsap } from "gsap"
import Head from "./Head"

const Layout = ({ children, location }) => {
  const [loaded, setLoaded] = useState(false)

  let tl = gsap.timeline()
  let sectionContainer = useRef(null)

  // Transition moved to Hero component
  // useEffect(() => {
  //   if (loaded && sectionContainer) {
  //     tl.fromTo(
  //       sectionContainer,
  //       { opacity: 0 },
  //       { opacity: 1, ease: Power4.easeInOut, duration: 1 }
  //     )
  //   }
  // }, [tl, loaded, sectionContainer])

  return (
    <>
      {/* //TODO: REPLACE WITH HEAD COMPONENT */}
      <Head />

      {loaded ? (
        <>
          <SmoothScroll callbacks={location} />
          <CustomCursor />
          <MobileMessage location={location.pathname} />
          <main ref={el => (sectionContainer = el)} key={location.pathname}>
            {children}
          </main>
        </>
      ) : (
        <Loader setLoaded={setLoaded} />
      )}
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
