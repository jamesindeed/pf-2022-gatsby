import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import "../styles/about.scss"
import "../styles/image-animation.scss"
import Image from "../images/james_img.jpg"

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
              data-scroll
              data-scroll-speed={-1}
              className="featured-post-image"
              style={{ position: "absolute" }}
              src={Image}
              alt="About Image"
            />
          </div>
          <div className="featured-post-column">
            <div className="featured-post-para-wrapper">
              <span>About.</span>
              <p id="about" className="featured-post-para">
                I am a creative and determined web developer with a passion for
                creating innovative designs. I specialize in customer
                satisfaction through teamwork and maintaining a commitment to
                exceeding expectations. I actively pursue opportunities to
                provide programming skills, leadership abilities, and enthusiasm
                to a fast-paced environment as a developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
