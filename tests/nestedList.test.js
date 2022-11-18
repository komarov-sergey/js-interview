const { flatList, transform } = require("../cases/nestedList");
const util = require("node:util");

test("transform flat to nasted list", () => {
  let output = [
    {
      id: 1,
      name: "lvl 1 item 1",
      parentId: null,
      children: [
        {
          id: 3,
          name: "lvl 2 item 3",
          parentId: 1,
          children: [
            { id: 4, name: "lvl 3 item 4", parentId: 3, children: [] },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "lvl 1 item 2",
      parentId: null,
      children: [{ id: 5, name: "lvl 2 item 5", parentId: 2, children: [] }],
    },
  ];

  console.log(
    util.inspect(transform(flatList), {
      showHidden: false,
      depth: null,
      colors: true,
    })
  );

  expect(transform(flatList)).toEqual(output);
});
