import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { Header, Hero, Featured, About, Gallery, Footer } from "../components"
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

  // const handlePreloader = () => {
  //   setPreloader(false)
  // }

  return (
    <>
      <Layout>
        <Helmet>
          <title>James Troughton</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap"
            rel="stylesheet"
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
        {preloader ? (
          <div
            // onClick={handlePreloader}
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
            <About />
            <Gallery />
            <Footer />
          </div>
        )}
      </Layout>
    </>
  )
}

export default Home
