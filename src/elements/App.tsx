import { World } from "game";
import React from "react";
import ReactDom from "react-dom";
import { Engine, Entity } from "@joaqim/ecs";
import { Position, Ball } from "components";
import Canvas from "./Canvas";
import { BallEl } from "./Ball";
import { GameEl } from "./Game";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);

const App = () => {
  const draw = (ctx: CanvasRenderingContext2D, frameCount?: number) => void {};

  // let world = new World();

  return (
    <>
      <h1>Hi from a react app</h1>
      <Canvas
        draw={draw}
        options={{ context: "2d", width: 640, height: 480 }}
      />
      <BallEl radius={40} x={150} y={75} />
      <GameEl
        balls={[
          {
            x: 90, y: 90, radius: 45, color: "#00ff00",
          },
          {
            x: 45, y: 45, radius: 10, color: "#0000ff",
          },
        ]}
      />
    </>
  );
};

ReactDom.render(<App />, mainElement);
