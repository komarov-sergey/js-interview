const {
  mkdir,
  mkfile,
  getChildren,
  getMeta,
  getName,
  isFile,
} = require("./lib/virtualFS");
const _ = require("lodash");

const tree = mkdir("my documents", [
  mkfile("avatar.jpg", { size: 100 }),
  mkfile("passport.jpg", { size: 200 }),
  mkfile("family.jpg", { size: 150 }),
  mkfile("addresses", { size: 125 }),
  mkdir("presentations"),
]);

function compressImages(tree) {
  const newTree = _.cloneDeep(tree);
  const isImg = ({ name }) => name.includes(".jpg");
  let getImgs = getChildren(newTree).filter(isFile).filter(isImg);

  getImgs.forEach((elem) => {
    getMeta(elem).size /= 2;
  });

  return newTree;
}

compressImages(tree);

module.exports = {
  compressImages,
};
