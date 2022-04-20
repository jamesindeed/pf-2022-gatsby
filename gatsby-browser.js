import React from "react"
import { Layout } from "./src/components"
import "./src/styles/scroll.scss"

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    return import(`intersection-observer`)
  }
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
