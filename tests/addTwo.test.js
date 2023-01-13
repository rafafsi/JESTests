const addTwo = require("../functions/addTwo");

test("returns a plus b", () => {
  expect(addTwo(1, 2)).toBe(3);
});
