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
  mkdir("etc", [mkfile("bashrc"), mkfile("consul.cfg")]),
  mkfile("hexletrc"),
  mkdir("bin", [mkfile("ls"), mkfile("cat")]),
]);

// console.log(tree);

const dfs = (tree) => {
  // Распечатываем содержимое узла
  console.log(getName(tree));
  // Если это файл, то возвращаем управление
  if (isFile(tree)) {
    return;
  }

  // Получаем детей
  const children = getChildren(tree);

  // Применяем функцию dfs ко всем дочерним элементам
  // Множество рекурсивных вызовов в рамках одного вызова функции
  // называется древовидной рекурсией
  children.forEach(dfs);
};

const changeOwner = (tree, owner) => {
  const name = getName(tree);
  const newMeta = _.cloneDeep(getMeta(tree));
  newMeta.owner = owner;

  if (isFile(tree)) {
    // Возвращаем обновлённый файл
    return mkfile(name, newMeta);
  }

  const children = getChildren(tree);
  // Ключевая строчка
  // Вызываем рекурсивное обновление каждого ребёнка
  const newChildren = children.map((child) => changeOwner(child, owner));
  const newTree = mkdir(name, newChildren, newMeta);

  // Возвращаем обновлённую директорию
  return newTree;
};

// dfs(tree);
console.log(changeOwner(tree, "komarov"));
