describe("doubleValues", function () {
  it("works", function () {
    expect(doubleValues([1, 3])).toEqual([2, 6]);
  });
  it("returns [] for empty array", function () {
    expect(doubleValues([])).toEqual([]);
  });
});