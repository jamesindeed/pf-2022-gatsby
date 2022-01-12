import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import Header from "../components/Header"

const Home = () => {
  return (
    <>
      <Layout>
        <Helmet>
          <title>James Troughton</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Helmet>
        <div
          className="main-container"
          id="main-container"
          data-scroll-container
        >
          <Header />
        </div>
      </Layout>
    </>
  )
}

export default Home
