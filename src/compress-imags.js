const {
  mkdir,
  mkfile,
  getChildren,
  getMeta,
  getName,
  isFile,
} = require("./lib/virtualFS");
const _ = require("lodash");

function compressImages(tree) {
  const newTree = _.cloneDeep(tree);
  const isImg = ({ name }) => name.includes(".jpg");
  const divideByTwo = (elem) => {
    getMeta(elem).size /= 2;
  };

  getChildren(newTree).filter(isFile).filter(isImg).forEach(divideByTwo);

  return newTree;
}

module.exports = {
  compressImages,
};
