import React from "react"
import { Helmet } from "react-helmet"
import "../styles/globals.scss"
import "../styles/scroll.scss"
import CustomCursor from "../CustomCursor"
import SmoothScroll from "../hooks/smoothScroll"

const Layout = ({ children, location }) => {
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
      <SmoothScroll callbacks={location} />
      <CustomCursor />
      <main style={{ margin: "0px 0vw" }}>{children}</main>
    </>
  )
}

export default Layout
