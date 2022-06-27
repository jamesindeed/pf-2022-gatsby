import React, { useRef, useState } from "react"
import "../styles/globals.scss"
import "../styles/scroll.scss"
import PropTypes from "prop-types"
import SmoothScroll from "../hooks/smoothScroll"
import { MobileMessage, Header, Loader } from "../components"
import { StaticQuery, graphql } from "gatsby"
import Head from "./Head"
import CustomCursorManager from "../CustomCursor/context/manager"
import CustomCursor from "../CustomCursor"

const Layout = ({ children, location }) => {
  // const [loaded, setLoaded] = useState(false)

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
        <CustomCursorManager>
          <>
            <CustomCursor />
            {/* <Head metadata={site.site.siteMetadata} /> */}
            <SmoothScroll callbacks={location} />
            {/* {loaded ? (
          <> */}
            <MobileMessage location={location.pathname} />
            <Header />
            <main key={location.pathname}>{children}</main>
            {/* </>
          ) : (
            <Loader setLoaded={setLoaded} />
          )} */}
          </>
        </CustomCursorManager>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
