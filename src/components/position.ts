import { Base, Model } from "@joaqim/ecs";

export interface IPosition {
  x: number;
  y: number;
}

@Model
export class Position extends Base<Position> {
  x!: number;

  y!: number;
}
