describe("hasAZero", function () {
  it("works for 101", function () {
    expect(hasAZero(101)).toBe(true);
  });
  it("works for 123", function () {
    expect(hasAZero(123)).toBe(false);
  });
});