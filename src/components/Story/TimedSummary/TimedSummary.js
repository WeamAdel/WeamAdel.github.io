import React, { useEffect } from "react";
import Schedule from "./Schedule/Schedule";
import Image from "./Image/Image";

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

function TimedSummary() {
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
  return (
    <section className="timed-summary">
      <div className="my-container">
        <h2>Summary</h2>
        <div className="row">
          <Image />
          <Schedule />
        </div>
      </div>
      {/* <canvas id="story-canvas" /> */}
    </section>
  );
}

export default TimedSummary;
