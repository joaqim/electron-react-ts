import React, { useEffect } from "react";
import {
  CanvasContextOptions,
  CanvasDrawCall,
  CanvasDrawContext,
  useCanvas,
} from "hooks";

import { resizeCanvasToDisplaySize } from "utils/canvas";

const canvasPredraw = (context: CanvasDrawContext) => {
  context.save();
  const { width, height } = resizeCanvasToDisplaySize(context.canvas);
  context.clearRect(0, 0, width, height);
};

const canvasPostdraw = (context: CanvasDrawContext) => {
  // index++;
  context.restore();
};

type CanvasProps = {
  draw: CanvasDrawCall;
  options?: CanvasContextOptions;
  predraw?: CanvasDrawCall;
  postdraw?: CanvasDrawCall;
};

const Canvas = ({
  draw,
  options,
  predraw = canvasPredraw,
  postdraw = canvasPostdraw,
  ...rest
}: CanvasProps) => {
  const canvasRef = useCanvas(draw, { ...options }, predraw, postdraw);

  return (
    <canvas
      ref={canvasRef}
      width={options?.width}
      height={options?.height}
      {...rest}
    />
  );
};

export default Canvas;
