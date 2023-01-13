const pairNumber = require("../functions/pairNumber");

test(`check if the number is pair or odd`, () => {
  expect(pairNumber(2)).toBe(true);
  expect(pairNumber(2)).toBeTruthy();
});
