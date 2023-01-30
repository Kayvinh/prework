describe("reverseVowels", function () {
  it("works: amazing", function () {
    expect(reverseVowels("amazing")).toBe("imazang");
  });
  it("works: Awesome", function () {
    expect(reverseVowels("Awesome")).toBe("ewosemA");
  });
});