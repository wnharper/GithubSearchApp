import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
]
let randomtheme = themes[Math.floor(Math.random() * themes.length)]

ReactDOM.render(
  <React.StrictMode>
    <App theme={randomtheme} />
  </React.StrictMode>,
  document.getElementById("root")
)
