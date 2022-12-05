const { initialUrl, replaceParamsInUrl } = require("../src/replace-params");

test("replace params in url", () => {
  let outputUrl = "/posts/1/comments/3";

  expect(
    replaceParamsInUrl(initialUrl, [
      { from: "postId", to: "1" },
      { from: "commentId", to: "3" },
    ])
  ).toEqual(outputUrl);
});
