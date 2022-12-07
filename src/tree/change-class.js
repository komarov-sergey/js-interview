const util = require("node:util");

const _ = require("lodash");

const {
  htmlTree,
  htmlTreeSource,
  classNameFrom,
  classNameTo,
} = require("../../__fixtures__/tree");

function changeClass(tree, oldClass, newClass) {
  console.log({ oldClass });
  console.log({ newClass });
  const { type } = tree;
  const haveClassName = tree.hasOwnProperty("className");

  if (type === "tag-leaf") {
    return { ...tree };
  }

  const children = tree.children;
  const newChildren = children?.map((elem) =>
    changeClass(elem, oldClass, newClass)
  );
  const newTree =
    newChildren?.length >= 0 ? { ...tree, children: newChildren } : { ...tree };

  if (haveClassName) {
    newTree.className =
      newTree.className === oldClass ? newClass : newTree.className;
  }

  return newTree;
}

// console.log(
//   util.inspect(changeClass(htmlTreeSource, classNameFrom, classNameTo), {
//     showHidden: false,
//     depth: null,
//     colors: true,
//   })
// );

module.exports = {
  changeClass,
};

// const result = changeClass(tree, "old-class", "new-class");

// console.log(result);
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
