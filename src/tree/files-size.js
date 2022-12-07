const _ = require("lodash");
const {
  mkdir,
  isFile,
  mkfile,
  getChildren,
  getName,
  getMeta,
  isDirectory,
} = require("../lib/virtualFS");

const tree = mkdir("/", [
  mkdir("etc", [
    mkdir("apache"),
    mkdir("nginx", [mkfile("nginx.conf", { size: 800 })]),
    mkdir("consul", [
      mkfile("config.json", { size: 1200 }),
      mkfile("data", { size: 8200 }),
      mkfile("raft", { size: 80 }),
    ]),
  ]),
  mkfile("hosts", { size: 3500 }),
  mkfile("resolve", { size: 1000 }),
]);
const childTree = getChildren(tree)[0];

const getFilesCount = (node) => {
  if (isFile(node)) {
    return getMeta(node).size;
  }

  const children = getChildren(node);
  const descendantCounts = children.map(getFilesCount);
  return _.sum(descendantCounts);
};

const getSubdirectoriesInfo = (tree) => {
  const children = getChildren(tree);
  const result = children
    // .filter(isDirectory)
    .map((child) => [getName(child), getFilesCount(child)]);

  return result.sort((a, b) => (a[1] < b[1] ? 1 : -1));
};

console.log(getSubdirectoriesInfo(childTree)); // 8
