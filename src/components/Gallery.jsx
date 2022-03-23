import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import useOnScreen from "../hooks/useOnScreen"
import cn from "classnames"
import "../styles/gallery.scss"

gsap.registerPlugin(ScrollTrigger)

const images = [
  {
    src: "https://cdn.dribbble.com/users/228368/screenshots/16950744/media/7dbc1e0484d18fce73ba825e67dceeae.png?compress=1&resize=1600x1200&vertical=top",
    title: "Ockhee",
    subtitle: "Dev Blog",
    category: "NextJS | GraphCMS",
  },
  {
    src: "https://cdn.dribbble.com/users/1430543/screenshots/16777122/media/290d8f5c51cbebe68326d5a6c5136cf0.png?compress=1&resize=1600x1200&vertical=top",
    title: "Twitter",
    subtitle: "Twitter Remake",
    category: "NextJS | Recoil | Firebase",
  },
  {
    src: "https://cdn.dribbble.com/users/228368/screenshots/16950744/media/7dbc1e0484d18fce73ba825e67dceeae.png?compress=1&resize=1600x1200&vertical=top",
    title: "Messenger",
    subtitle: "Slack Messenger Alternative",
    category: "React | Stream",
  },
  {
    src: "https://cdn.dribbble.com/users/1430543/screenshots/16777122/media/290d8f5c51cbebe68326d5a6c5136cf0.png?compress=1&resize=1600x1200&vertical=top",
    title: "Etherex",
    subtitle: "Ethereum Exchange",
    category: "React | Solana",
  },
]
function GalleryItem({
  src,
  category,
  subtitle,
  title,
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
    >
      <div></div>
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

  return (
    <section
      ref={el => (gallerySection = el)}
      data-scroll-section
      className="gallery-section"
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
