const convertTo24HrsFormat = require("../convertTime12to24");

test("converts time to 24 format", () => {
  expect(convertTo24HrsFormat("12:10AM")).toBe("00:10");
  expect(convertTo24HrsFormat("5:00AM")).toBe("05:00");
  expect(convertTo24HrsFormat("12:33PM")).toBe("12:33");
  expect(convertTo24HrsFormat("01:59PM")).toBe("13:59");
});
