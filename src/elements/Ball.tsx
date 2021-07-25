import React from "react";
import { useCanvas } from "hooks";

type BallElProps = { radius: number; x: number; y: number; color?: string };

export const BallEl = ({
  radius, x, y, color = "#f000ff",
}: BallElProps) => {
  const draw = (ctx: CanvasRenderingContext2D, _frameCount?: number): void => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
  };
  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} />;
};
