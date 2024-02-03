import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:

function Carousel() {
  let [count, setCount] = useState(0);

  function caruoselFunction(mode) {
    mode == "left"
      ? count < 1
        ? setCount((count = images.length - 1))
        : setCount((prev) => prev - 1)
      : count == images.length - 1
        ? setCount((count = 0))
        : setCount((prev) => prev + 1);
  }

  return (
    <div>
      <div
        id="container"
        style={{ backgroundImage: `url(${images[count].img})` }}
      >
        <div className="arrows-container">
          <ArrowBackIosIcon
            style={{ color: "white", fontSize: "40px" }}
            onClick={() => caruoselFunction("left")}
          />
        </div>
        <div id="text-container">
          <h1>{images[count].title}</h1>
          <h3>{images[count].subtitle}</h3>
        </div>
        <div className="arrows-container">
          <ArrowForwardIosIcon
            style={{ color: "white", fontSize: "40px" }}
            onClick={() => caruoselFunction("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
