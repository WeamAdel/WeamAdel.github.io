import React, { useEffect } from "react";

function setCanvasSize(canvas) {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
  canvas.setAttribute("width", windowWidth);
  canvas.setAttribute("height", windowHeight);
  return canvas;
}

function calculateNumOfCircles() {
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  return (windowWidth * windowHeight) / 4000;
}

function drawCanvasCircles(canvas, numOfCircles) {
  let ctx = canvas.getContext("2d");
  for (let i = 1; i <= numOfCircles; i++) {
    ctx.beginPath();
    ctx.arc(
      window.innerWidth * Math.random(),
      window.innerHeight * Math.random(),
      Math.ceil(Math.random() * 14),
      0,
      Math.PI * 2,
      false
    );
    ctx.stroke();
    ctx.closePath();
  }
  return canvas;
}

function TimedSummary() {
  useEffect(() => {
    let canvas = document.getElementById("story-canvas");
    let numOfCircles = calculateNumOfCircles();
    setCanvasSize(canvas);
    drawCanvasCircles(canvas, numOfCircles);
    window.addEventListener("resize", function () {
      numOfCircles = calculateNumOfCircles();
      setCanvasSize(canvas);
      drawCanvasCircles(canvas, numOfCircles);
    });
  });
  return (
    <section className="timed-summary">
      <canvas id="story-canvas" />
    </section>
  );
}

export default TimedSummary;
