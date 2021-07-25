export default class Vector2 {
  private point: Array<number>;

  public static readonly ZERO = new Vector2(0, 0);

  public static readonly zero = new Vector2(0, 0);

  public static readonly one = new Vector2(1, 1);

  public static readonly right = new Vector2(1, 0);

  public static readonly left = new Vector2(-1, 0);

  public static readonly up = new Vector2(0, 1);

  public static readonly down = new Vector2(0, -1);

  public get Point(): Array<number> {
    return this.point;
  }

  public constructor(x: number, y: number);
  // public constructor(vector: Vector2);
  public constructor(args: any[]);

  public constructor(...args: any[]) {
    if (args.length === 0) {
      throw new Error("Point (x, y) missing in Vector2 constructor.");
    }
    const arg = args[0];
    if (Array.isArray(arg)) {
      if (arg.length < 2) {
        throw new Error("Minimum number of dimensions is 2.");
      }
      this.point = arg;
    } else {
      this.point = args;
    }
  }

  public toString(): string {
    return `[Vector2]${this.x},${this.y}`;
  }

  public get magnitude(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  public normalize() {
    const { magnitude } = this;
    this.x /= magnitude;
    this.y /= magnitude;
  }

  public static normalize(a: Vector2): Vector2 {
    const { magnitude } = a;
    return new Vector2(a.x / magnitude, a.y / magnitude);
  }

  // public GetHashCode(): number {}

  public distanceSquare(v: Vector2): number {
    return Vector2.distanceSquare(this, v);
  }

  public static distanceSquare(a: Vector2, b: Vector2): number {
    const cx = b.x - a.x;
    const cy = b.y - a.y;
    return cx * cx + cy * cy;
  }

  public static equals(a: Vector2, b: Vector2): boolean {
    return a.equals(b);
  }

  public equals(v: Vector2): boolean {
    return this.x === v.x && this.y === v.y;
  }

  public static notEquals(a: Vector2, b: Vector2): boolean {
    return a.notEquals(b);
  }

  public notEquals(v: Vector2): boolean {
    return this.x !== v.x || this.y !== v.y;
  }

  public static lessThan(a: Vector2, b: Vector2): boolean {
    return a.lessThan(b);
  }

  public lessThan(v: Vector2): boolean {
    return this.x < v.x && this.y < v.y;
  }

  public static add(a: Vector2, b: Vector2): Vector2 {
    return a.add(b);
  }

  public add(p: Vector2): Vector2 {
    return new Vector2(this.x + p.x, this.y + p.y);
  }

  public static sub(a: Vector2, b: Vector2): Vector2 {
    return a.sub(b);
  }

  public sub(p: Vector2): Vector2 {
    return new Vector2(this.x - p.x, this.y - p.y);
  }

  public static times(a: Vector2, b: Vector2) {
    return a.times(b);
  }

  public times(v: Vector2): Vector2 {
    return new Vector2(this.x * v.x, this.y * v.y);
  }

  public static min(a: Vector2, b: Vector2): Vector2 {
    return new Vector2(Math.min(a.x, b.x), Math.min(a.y, b.y));
  }

  public static max(a: Vector2, b: Vector2): Vector2 {
    return new Vector2(Math.max(a.x, b.x), Math.max(a.y, b.y));
  }

  public get x(): number {
    return this.point[0];
  }

  public get y(): number {
    return this.point[1];
  }

  public set x(v: number) {
    this.point[0] = v;
  }

  public set y(v: number) {
    this.point[1] = v;
  }
}
