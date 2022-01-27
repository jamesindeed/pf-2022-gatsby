import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import useOnScreen from "../hooks/useOnScreen"
import cn from "classnames"

import "../styles/gallery.scss"

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
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
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

  const ref = useRef(null)

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      let sections = gsap.utils.toArray(".gallery-item-wrapper")

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          // pinSpacing: false,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      })
      ScrollTrigger.refresh()
    })
  }, [])

  const handleUpdateActiveImage = index => {
    setActiveImage(index + 1)
  }

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  )
}
