import {
  Base,
  Engine,
  EngineEntityListener,
  Entity,
  Model,
  Signature,
  SignatureBuilder,
  System,
} from "@joaqim/ecs";

import { Position, Ball } from "components";
import { CanvasDrawContext } from "hooks";

interface IDraw {
  draw(ctx: CanvasDrawContext, delta?: number): void;
}

@Model
class Sprite extends Base<Sprite> {
  width?: number;

  height?: number;

  name?: string;

  src?: string;
}

function drawPlaceholder(
  ctx: CanvasRenderingContext2D,
  delta: number,
  pos: Position,
  ball: Ball
) {
  const { x, y } = pos;
  const { color, radius } = ball;

  ctx.beginPath();
  ctx.arc(x, y, radius * Math.sin(delta! * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

class Renderer extends System implements EngineEntityListener, IDraw {
  signature?: Signature;

  onAttach(engine: Engine) {
    super.onAttach(engine);
    this.signature = new SignatureBuilder(engine)
      .include(Position, Ball)
      .build();
  }

  draw(ctx: CanvasRenderingContext2D, delta?: number): void {
    for (const entity of this.signature!.entities) {
      drawPlaceholder(
        ctx,
        delta!,
        entity.getComponent(Position),
        entity.getComponent(Ball)
      );
    }
  }

  update(engine: Engine, delta: number): void {
    // throw new Error("Method not implemented.");
  }

  onEntityAdded(entity: Entity): void {
    throw new Error("Method not implemented.");
  }

  onEntityRemoved(entity: Entity): void {
    throw new Error("Method not implemented.");
  }
}

export class World {
  public engine!: Engine;

  private _lastTimestamp = 0;

  public readonly renderer!: Renderer;

  constructor(private readonly ctx?: CanvasDrawContext) {
    const pos = new Position({ x: 1, y: 1 });
    this.renderer = new Renderer();
    this.engine = new Engine({
      entityMap: {
        entities: [
          new Entity({
            id: "entity",
            components: {
              Ball: new Ball(),
              Position: new Position({ x: 1, y: 1 }), // <Position>{ x: 100, y: 100 },
              classes: { Ball, Position },
            },
          }),
        ],
      },
      systems: [this.renderer],
    });
    this.engine.awake();

    // Make sure Update starts after all Systems are awaken
    window.requestAnimationFrame(() => {
      // set initial timestamp
      this._lastTimestamp = Date.now();

      // start update loop
      this.update();
    });

    return this;
  }

  draw(ctx: CanvasRenderingContext2D, delta?: number): void {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    /*
    ctx.beginPath();
    ctx.arc(110, 100, 20 * Math.sin(delta! * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#000000";
    ctx.fill();
    */
    ctx.beginPath();
    ctx.arc(150, 100, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    // TODO: Have sytems divided into buckets/signatures/tags
    // for (let system of this.engine.systems) system.draw(ctx, delta!)!;
  }

  update(): void {
    const delta = (Date.now() - this._lastTimestamp) / 1000;
    // console.log("Update");

    this.engine.update(delta);

    // update the timestamp
    this._lastTimestamp = Date.now();

    // Invoke on next frame
    window.requestAnimationFrame(() => this.update());
  }
  protected dispatch?(): void;
}
