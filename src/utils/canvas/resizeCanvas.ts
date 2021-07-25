const resize = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  ratio: number = 1
) => {
  Object.defineProperty(canvas, "width", width * ratio);
  Object.defineProperty(canvas, "height", height * ratio);
};

export const resizeCanvas = (
  canvas: HTMLCanvasElement
): { width: number; height: number } => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    resize(canvas, width, height, ratio);
    context!.scale(ratio, ratio);
  }
  return { width, height };
};

export const resizeCanvasDPI = (
  canvas: HTMLCanvasElement
): { width: number; height: number } => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    resize(canvas, width, height, ratio);
    context!.scale(ratio, ratio);
  }
  return { width, height };
};
export const resizeCanvasToDisplaySize = (
  canvas: HTMLCanvasElement
): { width: number; height: number } => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    resize(canvas, width, height);
  }

  return { width, height };
};
