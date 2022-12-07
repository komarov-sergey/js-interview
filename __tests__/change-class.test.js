const _ = require("lodash");
const treeData = require("../__fixtures__/tree.js");
const { changeClass } = require("../src/tree/change-class");

test("changeClass", () => {
  const { htmlTreeSource, htmlTree, classNameFrom, classNameTo } = treeData;
  const sourceCloned = _.cloneDeep(htmlTreeSource);

  const result = changeClass(htmlTreeSource, classNameFrom, classNameTo);
  expect(result).toEqual(htmlTree);
  expect(htmlTreeSource).toEqual(sourceCloned);
});
