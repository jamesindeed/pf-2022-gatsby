import React from "react"
import { Header, Hero, About, Gallery, Footer } from "../components"
import { graphql } from "gatsby"

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home
