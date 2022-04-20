import React, { useRef, useState } from "react"
import "../styles/globals.scss"
import "../styles/scroll.scss"
import PropTypes from "prop-types"
import CustomCursor from "../CustomCursor"
import SmoothScroll from "../hooks/smoothScroll"
import { MobileMessage, Header, Loader } from "../components"
import { StaticQuery, graphql } from "gatsby"
import Head from "./Head"

const Layout = ({ children, location }) => {
  const [loaded, setLoaded] = useState(false)

  // let tl = gsap.timeline()
  // let sectionContainer = useRef(null)

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
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={site => (
        // TODO: Loader not working when deployed, shows blank screen.
        <>
          <Head metadata={site.site.siteMetadata} />
          <SmoothScroll callbacks={location} />
          {/* {loaded ? (
          <> */}
          <CustomCursor />
          <MobileMessage location={location.pathname} />
          <Header />
          <main key={location.pathname}>{children}</main>
          {/* </>
          ) : (
            <Loader setLoaded={setLoaded} />
          )} */}
        </>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
