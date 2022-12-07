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
    mkdir("nginx", [mkfile("nginx.conf")]),
    mkdir("consul", [mkfile("config.json"), mkdir("data")]),
  ]),
  mkdir("logs"),
  mkfile("hosts"),
]);

// and add path to it
const findEmptyDirPaths = (tree) => {
  // Внутренняя функция, которая может передавать аккумулятор
  // В качестве аккумулятора выступает depth, переменная, содержащая текущую глубину
  const iter = (node, depth) => {
    const name = getName(node);
    let ancestry = "";
    ancestry += name;
    const children = getChildren(node);

    // Если директория пустая, то добавляем ее в список
    if (children.length === 0) {
      // return name;
      return ancestry;
    }

    // Если это второй уровень вложенности, и директория не пустая
    // то не имеет смысла смотреть дальше
    if (depth === 2) {
      // Почему возвращается именно пустой массив?
      // Потому что снаружи выполняется flat
      // Он раскрывает пустые массивы
      return [];
    }

    // Оставляем только директории
    return (
      children
        .filter(isDirectory)
        // Не забываем увеличивать глубину
        .flatMap((child) => iter(child, depth + 1))
    );
  };

  // Начинаем с глубины 0
  return iter(tree, 0);
};

findEmptyDirPaths(tree); // ['apache', 'logs']

console.log(findEmptyDirPaths(tree)); // ['apache', 'data', 'logs']
