const names = require("../functions/anArray");

test("this array must contains rafa", () => {
  expect(names).toContain("rafa");
});
