import React from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import Schedule from "./Schedule/Schedule";
import Image from "./Image/Image";
import Confetti from "./Confetti/Confetti";

// function setCanvasSize(canvas) {
//   let windowWidth = window.innerWidth;
//   let windowHeight = window.innerHeight;
//   canvas.setAttribute("width", windowWidth);
//   canvas.setAttribute("height", windowHeight);
//   return canvas;
// }

// function calculateNumOfCircles() {
//   let windowWidth = window.innerWidth;
//   let windowHeight = window.innerHeight;

//   return (windowWidth * windowHeight) / 4000;
// }

// function drawCanvasCircles(canvas, numOfCircles) {
//   let ctx = canvas.getContext("2d");
//   for (let i = 1; i <= numOfCircles / 2; i++) {
//     ctx.beginPath();
//     let radius = Math.ceil(Math.random() * 7);
//     let x = window.innerWidth * Math.random();
//     let y = window.innerHeight * Math.random();
//     x = x - radius <= 0 ? x + 20 : x;
//     y = y - radius <= 0 ? y + 20 : y;
//     ctx.arc(x, y, radius, 0, Math.PI * 2, false);
//     ctx.strokeStyle = "rgb(254, 159, 157)";
//     ctx.strokeWidth = 1;
//     ctx.stroke();
//     ctx.closePath();
//   }
//   return canvas;
// }
// useEffect(() => {
//   let canvas = document.getElementById("story-canvas");
//   let numOfCircles = calculateNumOfCircles();
//   setCanvasSize(canvas);
//   drawCanvasCircles(canvas, numOfCircles);
//   window.addEventListener("resize", function () {
//     numOfCircles = calculateNumOfCircles();
//     setCanvasSize(canvas);
//     drawCanvasCircles(canvas, numOfCircles);
//   });
// });

function TimedSummary(props) {
  let props1 = { transform: -100, opacity: 0 };
  let props2 = { transform: 0, opacity: 1 };
  let to = props.open ? props2 : props1;
  let { transform, opacity } = useSpring({ to });

  return (
    <animated.section
      className="timed-summary"
      style={{
        transform: transform.interpolate((num) => `translateY(${num}%)`),
        opacity: opacity,
      }}
      onClick={function (e) {
        const targetClassName = e.target.className;
        if (targetClassName === "timed-summary") {
          props.toggleSummary();
        }
      }}
    >
      <div className="my-container">
        <button className="toggle-summary" onClick={props.toggleSummary}>
          <img src="/assets/images/shared/backspace.svg" alt="Backspace Icon" />
        </button>
        <h2>Summary</h2>
        <div className="row">
          <Image />
          <Schedule />
        </div>
      </div>
      {/* <Confetti /> */}
    </animated.section>
  );
}
TimedSummary.propTypes = {
  toggleSummary: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
export default TimedSummary;
