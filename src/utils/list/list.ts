export default class List<T> {
  constructor(private items: Array<T> = []) {}

  clear() {
    this.items = [];
  }

  get size(): number {
    return this.items.length;
  }

  insert(index: number, value: T): void {
    this.items[index] = value;
  }

  add(value: T): void {
    this.items.push(value);
  }

  get(index: number): T {
    return this.items[index];
  }

  sort(callback: (a: T, b: T) => number): Array<T> {
    return this.items.sort((a: T, b: T) => callback(a, b));
  }

  forEach(callback: (item: T) => void): void {
    this.items.forEach((item: T) => callback(item));
  }

  findAll(callback: (item: T) => boolean): List<T> {
    const list = new List<T>();
    list.items = this.items.filter((item: T) => callback(item));
    return list;
  }

  reverse(): Array<T> {
    return this.items.reverse();
  }
}
