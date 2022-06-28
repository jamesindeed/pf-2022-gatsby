import React, { useEffect, useRef, useState, useContext } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import useOnScreen from "../hooks/useOnScreen"
import cn from "classnames"
import "../styles/gallery.scss"
import CustomCursorContext from "../CustomCursor/context/CustomCursorContext"
import ProjectImage1 from "../images/projects/project-aesop.png"
import ProjectImage2 from "../images/projects/project-markdown.png"
import ProjectImage3 from "../images/projects/project-ockhee.png"
import ProjectImage4 from "../images/projects/project-portfolio.png"

gsap.registerPlugin(ScrollTrigger)

const images = [
  {
    src: ProjectImage1,
    title: "Aesop Rotate",
    subtitle: "Ecommerce",
    category: "NextJS | Sanity",
    link: "https://github.com/jamesindeed/rotate_aesop",
    live: "https://rotate-aesop-umber.vercel.app/product/in-two-minds-facial-cleanser",
  },
  {
    src: ProjectImage3,
    title: "Ockhee",
    subtitle: "Developer Blog",
    category: "NextJS | GraphCMS",
    link: "https://github.com/jamesindeed/ockhee",
    live: "https://ockhee.vercel.app/",
  },
  {
    src: ProjectImage2,
    title: "Ink MD",
    subtitle: "Markdown Editor",
    category: "Electron | React",
    link: "https://github.com/jamesindeed/markdown-editor",
  },
  {
    src: ProjectImage4,
    title: "James",
    subtitle: "Portfolio",
    category: "GatsbyJS | GraphQL",
    link: "https://github.com/jamesindeed/pf-2022-gatsby",
    live: "https://jamestroughton.vercel.app/",
  },
]
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  link,
  live,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null)

  const onScreen = useOnScreen(ref, 0.5)

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index)
    }
  }, [onScreen, index])

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
      id="work"
    >
      <div></div>
      <a href={live}>
        <div className="gallery-item">
          <div className={cn("gallery-item-info-2", { "is-reveal": onScreen })}>
            <h1 className="gallery-info-subtitle">{subtitle}</h1>
          </div>
          <div className={cn("gallery-item-info", { "is-reveal": onScreen })}>
            {/* <h1 className="gallery-info-subtitle">{subtitle}</h1> */}
            <h2 className="gallery-info-title">{title}</h2>
            <h3 className="gallery-info-category">{category}</h3>
          </div>
          <div
            className="gallery-item-image"
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
      </a>
      <div></div>
    </div>
  )
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1)

  let pinWrap = useRef(null)
  let galleryWrap = useRef(null)
  let gallerySection = useRef(null)

  useEffect(() => {
    let sections = gsap.utils.toArray(".gallery-item-wrapper")
    let galleryWrapWidth = galleryWrap.offsetWidth

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 0.9),
      ease: "none",
      scrollTrigger: {
        start: "top top",
        trigger: pinWrap,
        scroller: "#___gatsby",
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: () => `+=${galleryWrapWidth}`,
        invalidateOnRefresh: true,
      },
    })
    ScrollTrigger.addEventListener("refresh", () => window.scroll.update())
    ScrollTrigger.refresh()
  }, [pinWrap])

  // Color Changer
  useEffect(() => {
    ScrollTrigger.create({
      trigger: gallerySection,
      scroller: "#___gatsby",
      start: "top 50%",
      srub: true,
      onEnter: () =>
        gsap.to("body", {
          "--color": "#000",
          immediateRender: false,
          start: "top top",
          overwrite: "auto",
        }),
      onLeaveBack: () =>
        gsap.to("body", {
          "--color": "#f5f5f5",
          immediateRender: false,
          start: "top center",
          overwrite: "auto",
        }),
      invalidateOnRefresh: true,
    })
  }, [gallerySection])

  // useEffect(() => {
  //   gsap.to("body", {
  //     "--color": "#000",
  //     immediateRender: false,
  //     start: "top top",
  //     scrollTrigger: {
  //       trigger: pinWrap,
  //       scroller: "#___gatsby",
  //       scrub: true,
  //     },
  //   })
  //   ScrollTrigger.addEventListener("refresh", () => window.scroll.update())
  //   ScrollTrigger.refresh()
  // }, [pinWrap])
  //

  const handleUpdateActiveImage = index => {
    setActiveImage(index + 1)
  }

  const { setType } = useContext(CustomCursorContext)

  return (
    <section
      ref={el => (gallerySection = el)}
      data-scroll-section
      className="gallery-section"
      onMouseEnter={() => setType("menu")}
      onMouseLeave={() => setType("default")}
    >
      <div ref={el => (pinWrap = el)} className="gallery-container">
        <div ref={el => (galleryWrap = el)} className="gallery">
          {/* Gallery Counter */}
          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>
          {/* Gallery Map */}
          {images.map((image, index) => (
            <GalleryItem
              key={src}
              index={index}
              {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
