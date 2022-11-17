const titleCase = require("../cases/convertToTitleCase");

test("converts string to title case", () => {
  expect(titleCase(" SOME stRRring ")).toBe("Some Strrring");
  expect(titleCase("SOME STRING ")).toBe("Some String");
});
