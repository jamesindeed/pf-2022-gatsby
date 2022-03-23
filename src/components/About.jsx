import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../styles/about.scss"
import "../styles/image-animation.scss"
import Image from "../images/featuredPost.jpg"

gsap.registerPlugin(ScrollTrigger)

const FeaturedPost = () => {
  let tl = gsap.timeline()
  let featuredPostSection = useRef(null)
  let image = useRef(null)

  useEffect(() => {
    tl.to(image, {
      scrollTrigger: {
        trigger: featuredPostSection,
        pin: true,
        scrub: true,
        start: "center center",
        end: "bottom top",
        scroller: "#___gatsby",
      },
      scaleY: 0,
    })

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update())
    ScrollTrigger.refresh()
  }, [tl, featuredPostSection, image])

  return (
    <section className="featured-post-section" data-scroll-section>
      <div className="featured-post-container">
        <div
          ref={el => (featuredPostSection = el)}
          className="featured-post-row"
        >
          <div className="featured-post-column">
            <div className="image-animation" ref={el => (image = el)} />
            <img
              className="featured-post-image"
              style={{ position: "absolute" }}
              src={Image}
            />
          </div>
          <div className="featured-post-column">
            <div className="featured-post-para-wrapper">
              <span>1.</span>
              <p className="featured-post-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Auctor elit sed vulputate mi sit amet mauris commodo. Auctor
                neque vitae tempus quam pellentesque nec nam aliquam.
              </p>
              {/* <p className="featured-post-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Auctor elit sed vulputate mi sit amet mauris commodo. Auctor
                neque vitae tempus quam pellentesque nec nam aliquam.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
