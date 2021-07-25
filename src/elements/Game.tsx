import React from "react";
import { CanvasDrawCall, useCanvas } from "hooks";
import { IBall, IPosition } from "components";

type GameElProps = { balls: Array<IBall & IPosition> };

export const GameEl = ({ balls = [] }: GameElProps) => {
  const draw: CanvasDrawCall = (
    ctx: CanvasRenderingContext2D,
    _delta?: number,
  ): void => {
    for (const ball of balls) {
      const {
        x, y, radius, color,
      } = ball;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }
  };
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} />;
};
