export default class Color {
  public readonly R: number;

  public readonly G: number;

  public readonly B: number;

  public readonly A: number;

  public static isValidChannel(v: number, isAlpha = false): boolean {
    const max = isAlpha ? 1 : 255;
    if (v < 0 || v > max) {
      return false;
    }

    if (!isAlpha && v % 1 !== 0) {
      return false;
    }

    return true;
  }

  constructor(r: number, g: number, b: number, a: number) {
    if (!Color.isValidChannel(r)) {
      throw new Error("Provided incorrect value for Red channel");
    }

    if (!Color.isValidChannel(g)) {
      throw new Error("Provided incorrect value for Green channel");
    }

    if (!Color.isValidChannel(b)) {
      throw new Error("Provided incorrect value for Blue channel");
    }

    if (!Color.isValidChannel(a, true)) {
      throw new Error("Provided incorrect value for Alpha channel");
    }

    this.R = r;
    this.G = g;
    this.B = b;
    this.A = a;
  }

  public asString(): string {
    return `rgba(${this.R}, ${this.G}, ${this.B}, ${this.A})`;
  }

  public static fromString(str: string): Color {
    const arr = str.replace(new RegExp(/\(|\)|[A-Za-z]/g), "").split(",");

    const r = Number(arr[0]);
    const g = Number(arr[1]);
    const b = Number(arr[2]);
    const a = Number(arr[3]);

    if (
      Number.isNaN(r) ||
      Number.isNaN(g) ||
      Number.isNaN(b) ||
      Number.isNaN(a)
    ) {
      throw new Error("Invalid string");
    }

    return new Color(r, g, b, a);
  }
}
