import React from "react"
import "../styles/featured.scss"
import Image1 from "../images/Interior.webp"
import Image2 from "../images/Artworld.webp"
// import { StaticImage } from "gatsby-plugin-image"

export default function Featured() {
  return (
    <section className="featured-section" id="intro" data-scroll-section>
      <div className="featured-row-layout">
        <h6>1. Interior Design | Site</h6>
        <img src={Image1} data-scroll alt="interior" />
      </div>
      <div className="featured-column-layout">
        <h6>2. Artwork Site</h6>
        <img src={Image2} data-scroll alt="artwork" />
      </div>
    </section>
  )
}
