import React, { useRef, useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import "../styles/globals.scss"
import "../styles/scroll.scss"
import PropTypes from "prop-types"
import CustomCursor from "../CustomCursor"
import SmoothScroll from "../hooks/smoothScroll"
import { MobileMessage, Loader } from "../components"
import { gsap, Power4 } from "gsap"

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
      <Helmet>
        <title>James Troughton</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@100;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@100;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

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
