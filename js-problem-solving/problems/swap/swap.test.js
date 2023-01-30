describe("swap", function () {
  it("works and mutates the array", function () {
    const arr = [1, 2, 3, 4];
    expect(swap(arr, 0, 2)).toEqual([3, 2, 1, 4]);
    expect(arr).toEqual([3, 2, 1, 4]);
  });
});