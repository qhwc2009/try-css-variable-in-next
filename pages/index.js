import React from "react";
import { DARK, LIGHT, setTheme } from "prism-color";
import "./global.styl";

setTheme(DARK);

let i = 0;
const Home = () => (
  <div className="app">
    <div className="app__demo-box">
      2123
      <span
        className="app__button"
        onClick={() => {
          setTheme(i % 2 ? DARK : LIGHT)
          i++
        }}
      >
        点击
      </span>
    </div>
  </div>
)

export default Home
