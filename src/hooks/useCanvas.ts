import { useRef, useEffect } from "react";

export type CanvasDrawContext = CanvasRenderingContext2D;
/*
  | CanvasRenderingContext2D
  | RenderingContext
  | WebGLRenderingContext;
  */

export type CanvasDrawCall = (
  context: CanvasDrawContext,
  frameCount?: number
) => void;

export type CanvasContextOptions = {
  context?: string;
  width?: number;
  height?: number;
};

export const useCanvas = (
  draw: CanvasDrawCall,
  options?: CanvasContextOptions,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  predraw: CanvasDrawCall = (_context: CanvasDrawContext) => {},
  postdraw: CanvasDrawCall = () => {}
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = <CanvasRenderingContext2D>(
      canvas.getContext(options?.context || "2d") // TODO: Only works with 2D context for now
    );
    let frameCount = 0;
    let animationFrameId: number;

    const render = () => {
      frameCount += 1;

      predraw(context);
      draw(context, frameCount);
      postdraw(context);

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return canvasRef;
};
export default useCanvas;
