import "./App.css"
import { useState } from "react"
import gend from "./img/gend.jpg"
import lenya from "./img/lenya.jpeg"
import mge from "./img/mge.jpg"
import ryan from "./img/ryan.jpg"
import arrayRandElement from "./utils/arrayRandElement"
function App() {
  const images = [gend, lenya, mge, ryan]
  const [imgToShow, setImgToShow] = useState(
    arrayRandElement(images)
  )
  const [isLoading, setIsLoading] = useState(false)
  const changeImg = () => {
    if (!isLoading) {
      setIsLoading(true)
      setTimeout(() => {
        setImgToShow(arrayRandElement(images))
        setIsLoading(false)
      }, 3000)
    }
  }
  return (
    <div className="App">
      {(!isLoading && (
        <img
          src={imgToShow}
          alt="Image"
          className="mainImage"
        />
      )) || (
        <div className="loadingWrapper">Loading...</div>
      )}
      <button
        onClick={changeImg}
        className="button"
        disabled={isLoading}
      >
        Click me
      </button>
    </div>
  )
}

export default App
