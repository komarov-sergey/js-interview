const { fill } = require("../src/fillArr");

let array = [];

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test("check fill arr fn", () => {
  expect(fill(array, "*", 1, 3)).toEqual([1, "*", "*", 4]);
});

test("check fill arr fn 2", () => {
  expect(fill(array, "*")).toEqual(["*", "*", "*", "*"]);
});

test("check fill arr fn 3", () => {
  expect(fill(array, "*", 4)).toEqual([1, 2, 3, 4]);
});

test("check fill arr fn 4", () => {
  expect(fill(array, "*", 0, 10)).toEqual(["*", "*", "*", "*"]);
});
