const _ = require("lodash");
const {
  mkdir,
  isFile,
  mkfile,
  getChildren,
  getName,
  getMeta,
} = require("../lib/virtualFS");

// console.log(tree);
const tree = mkdir("/", [
  mkdir("etc", [
    mkdir("apache"),
    mkdir("nginx", [mkfile(".nginx.conf", { size: 800 })]),
    mkdir(".consul", [
      mkfile(".config.json", { size: 1200 }),
      mkfile("data", { size: 8200 }),
      mkfile("raft", { size: 80 }),
    ]),
  ]),
  mkfile(".hosts", { size: 3500 }),
  mkfile("resolve", { size: 1000 }),
]);

const getNodesCount = (tree) => {
  const isHidden = getName(tree)[0] === ".";
  if (isFile(tree)) {
    return isHidden ? 1 : 0;
  }

  const children = getChildren(tree);
  const descendantCounts = children.map(getNodesCount); // [3, 1, 3]
  return _.sum(descendantCounts);
};
// const getNodesCount = (tree) => {
//   if (isFile(tree)) {
//     // Возвращаем 1 для учёта текущего файла
//     return 1;
//   }

//   // Если узел — директория, получаем его детей
//   const children = getChildren(tree);
//   // Самая сложная часть
//   // Считаем количество потомков для каждого из детей,
//   // вызывая рекурсивно нашу функцию getNodesCount
//   const descendantCounts = children.map(getNodesCount); // [3, 1, 3]
//   // Возвращаем 1 (текущая директория) + общее количество потомков
//   return 1 + _.sum(descendantCounts);
// };

console.log(getNodesCount(tree)); // 8
