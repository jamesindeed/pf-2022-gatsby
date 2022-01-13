import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { Header, Hero, Featured } from "../components"
import useLocoScroll from "../hooks/useLocoScroll"

const Home = () => {
  const [preloader, setPreloader] = useState(true)

  useLocoScroll(!preloader)
  const [timer, setTimer] = useState(3)

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreloader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  const handlePreloader = () => {
    setPreloader(false)
  }

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
        {preloader ? (
          <div
            onClick={handlePreloader}
            className="loader-wrapper absolute-class"
          >
            <h2>{timer}</h2>
            <h1>James Troughton</h1>
            <h2>Auckland, New Zealand</h2>
          </div>
        ) : (
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            <Header />
            <Hero />
            <Featured />
          </div>
        )}
      </Layout>
    </>
  )
}

export default Home
