describe("hasCertainKey", function () {
  const people = [
    {name: "Hector"},
    {name: "Samantha", nickname: "Sam"},
  ];

  it("works for true", function () {
    expect(hasCertainKey(people, "name")).toBe(true);
  });
  it("works for false", function () {
    expect(hasCertainKey(people, "nickname")).toBe(false);
  });
});