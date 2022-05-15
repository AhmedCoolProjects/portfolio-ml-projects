import { Button, Paper } from "@mui/material";
import { useEffect } from "react";

export function DrawingPaperCard() {
  var canvasPaper: HTMLCanvasElement | null,
    ctx: CanvasRenderingContext2D,
    flag: boolean = false,
    prevX: number = 0,
    prevY: number = 0,
    currX: number = 0,
    currY: number = 0,
    dot_flag: boolean = false,
    x = "black",
    y = 2;

  function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  }

  function findxy(res: string, e: MouseEvent) {
    if (res == "down" && canvasPaper) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvasPaper.offsetLeft;
      currY = e.clientY - canvasPaper.offsetTop;
      flag = true;
      dot_flag = true;
      if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
      }
    }
    if (res == "up" || res == "out") {
      flag = false;
    }
    if (res == "move") {
      if (flag && canvasPaper) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvasPaper.offsetLeft;
        currY = e.clientY - canvasPaper.offsetTop;
        draw();
      }
    }
  }

  function initFct() {
    canvasPaper = document.getElementById("canvas_paper") as HTMLCanvasElement;
    if (canvasPaper) {
      ctx = canvasPaper.getContext("2d") as CanvasRenderingContext2D;
      canvasPaper.addEventListener(
        "mousemove",
        (e) => findxy("move", e),
        false
      );
      canvasPaper.addEventListener(
        "mousedown",
        (e) => findxy("down", e),
        false
      );
      canvasPaper.addEventListener("mouseup", (e) => findxy("up", e), false);
      canvasPaper.addEventListener("mouseout", (e) => findxy("out", e), false);
    }
  }
  function clearCanvas() {
    if (canvasPaper) {
      ctx.clearRect(0, 0, canvasPaper.width, canvasPaper.height);
    }
  }
  function saveCanvas() {
    if (canvasPaper) {
      var dataURL = canvasPaper.toDataURL();
      console.log(dataURL);
    }
  }

  useEffect(() => {
    initFct();
  });
  return (
    <Paper elevation={3} className="items-center  flex flex-col ">
      <canvas
        id="canvas_paper"
        width="400"
        height="400"
        style={{
          border: "2px solid",
        }}
      ></canvas>
      <div className="flex flex-row my-4 items-center space-x-6 justify-center">
        <Button onClick={() => saveCanvas()}>Submit</Button>
        <Button onClick={() => clearCanvas()}>Clear</Button>
      </div>
    </Paper>
  );
}
