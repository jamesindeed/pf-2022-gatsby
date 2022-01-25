import React from "react"
import "../styles/globals.scss"
import "../styles/locomotive-scroll.scss"
import CustomCursor from "../CustomCursor"

const Layout = ({ children }) => {
  return (
    <>
      <CustomCursor />
      <main>{children}</main>
    </>
  )
}

export default Layout
