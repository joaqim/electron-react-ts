import { Base, Model } from "@joaqim/ecs";

export interface IBall {
  color: string;
  radius: number;
}

@Model
export class Ball extends Base<Ball> {
  color: string = "#000000";

  radius: number = 20;
}
