import React from "react"
import useWindowSize from "../hooks/useWindowSize"
import "../styles/mobileMessage.scss"

const MobileMessage = () => {
  const { width } = useWindowSize()

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
