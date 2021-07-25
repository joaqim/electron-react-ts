import List from "utils/list";
import Vector2 from "./vector2";
import Winding from "./winding";

export default class Polygon {
  constructor(private readonly vertices: List<Vector2>) {}

  public area(): number {
    return Math.abs(this.signedDoubleArea() * 0.5);
  }

  polyWinding(): Winding {
    const signedDoubleArea = this.signedDoubleArea();
    if (signedDoubleArea < 0) {
      return Winding.CLOCKWISE;
    }
    if (signedDoubleArea > 0) {
      return Winding.COUNTERCLOCKWISE;
    }
    return Winding.NONE;
  }

  private signedDoubleArea(): number {
    let nextIndex: number;
    const n = this.vertices.size;
    let signedDoubleArea = 0;

    for (let index = 0; index < n; index += 1) {
      nextIndex = (index + 1) % n;
      const point = this.vertices.get(index);
      const next = this.vertices.get(nextIndex);
      signedDoubleArea += point.x * next.y - next.x * point.y;
    }

    return signedDoubleArea;
  }
}
