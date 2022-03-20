import React, { useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"
import "../styles/mobileMessage.scss"

const MobileMessage = ({ location }) => {
  const { width } = useWindowSize()

  useEffect(() => {
    if (width < 481) {
      document.body.style.overflow = "none"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [width, location])

  if (width < 481) {
    return (
      <div className="mobile-message">
        <p className="mobile-message-text">Please rotate your device 🙃</p>
      </div>
    )
  } else {
    return null
  }
}

export default MobileMessage
