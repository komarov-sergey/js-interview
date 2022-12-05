const _ = require("lodash");
const {
  mkdir,
  isFile,
  mkfile,
  getChildren,
  getName,
  getMeta,
} = require("../lib/virtualFS");

const tree = mkdir("/", [
  mkdir("eTc", [mkdir("NgiNx"), mkdir("CONSUL", [mkfile("cOnfiG.json")])]),
  mkfile("hOsts"),
]);

function downcaseFileNames(tree) {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), newMeta);
  }

  const children = getChildren(tree);
  const newChildren = children.map(downcaseFileNames);
  const newTree = mkdir(name, newChildren, newMeta);

  return newTree;
}

downcaseFileNames(tree);

module.exports = {
  downcaseFileNames,
};
