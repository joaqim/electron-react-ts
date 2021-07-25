import List from "./list";

describe(">>> List", () => {
  let list: List<any>;

  beforeEach(() => {
    list = new List<number>();
    list.add(1);
    list.add(2);
    list.add(3);
  });

  it("should contain 3 values", () => {
    expect(list.size).toBe(3);
  });

  it("should be convert toString", () => {
    //var spy1 = jest.spyOn(list);
    list.forEach((v: number) => expect(v).toBeDefined());
  });

  it("should be able to construct with Array<T>", () => {
    var newList = new List<number>(new Array<number>(5).fill(5));
    expect(newList.size).toBe(5);
    var identicalList = new List<number>();

    identicalList.add(5);
    identicalList.add(5);
    identicalList.add(5);
    identicalList.add(5);
    identicalList.add(5);
    expect(newList).toEqual(identicalList);
  });

  it("should contain 1,2,3", () => {
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
    expect(list.get(2)).toBe(3);
  });
  it("should be able to filter with FindAll", () => {
    list = new List<string>();
    list.add("True");
    list.add("False");
    list.add("False");
    list.add("True");
    var filteredList = list.findAll((s: String) => {
      return s == "True";
    });
    expect(filteredList.size).toBe(2);
    expect(filteredList.get(0)).toBe("True");
    expect(filteredList.get(1)).toBe("True");
  });
});
