import Vector2 from "./vector2";

export default class Rect {
  public static readonly zero = new Rect(0, 0, 0, 0);

  public static readonly one = new Rect(1, 1, 1, 1);

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  public get left(): number {
    return this.x;
  }

  public get right(): number {
    return this.x + this.width;
  }

  public get top(): number {
    return this.y;
  }

  public get bottom(): number {
    return this.y + this.height;
  }

  public get topLeft(): Vector2 {
    return new Vector2(this.left, this.top);
  }

  public get bottomRight(): Vector2 {
    return new Vector2(this.right, this.bottom);
  }
}
