import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useState } from "react"
import LocomotiveScroll from "../utils/locomotive-scroll.min.js"
// import "locomotive-scroll/src/locomotive-scroll.scss"

gsap.registerPlugin(ScrollTrigger)

export default function useLocoScroll(start) {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 1024

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [])

  useEffect(() => {
    if (!start) return
    let locoScroll = null

    const scrollEl = document.querySelector("#main-container")

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    })

    locoScroll.on("scroll", () => {
      ScrollTrigger.update()
    })

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y
        }
        return null
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x
        }
        return null
      },
      // getBoundingClientRect() {
      //   return {
      //     top: 0,
      //     left: 0,
      //     width: window.innerWidth,
      //     height: window.innerHeight,
      //   }
      // },

      pinType: width > breakpoint ? "transform" : "fixed",
    })
    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update()
      }
    }

    ScrollTrigger.addEventListener("refresh", lsUpdate)
    ScrollTrigger.refresh()

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate)
        locoScroll.destroy()
        locoScroll = null
        console.log("Kill", locoScroll)
      }
    }
  }, [start])
}
