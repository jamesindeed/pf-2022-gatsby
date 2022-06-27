import React from "react"
import { Layout } from "./src/components"
import "./src/styles/scroll.scss"

// import CustomCursorManager from "./src/CustomCursor/context/manager"
// import CustomCursor from "./src/CustomCursor"

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    return import(`intersection-observer`)
  }
}

export const wrapPageElement = ({ element, props }) => {
  return (
    // <CustomCursorManager>
    //   <CustomCursor />
    <Layout {...props}>{element}</Layout>
    // </CustomCursorManager>
  )
}
