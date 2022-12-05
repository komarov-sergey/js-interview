const { getChildren, mkdir, mkfile, getMeta } = require("../src/lib/virtualFS");
const _ = require("lodash");

const { downcaseFileNames } = require("../src/tree/downcase-filenames");

describe("should", () => {
  test("be immutable", () => {
    const tree = mkdir("/", [
      mkdir("eTc", [mkdir("NgiNx"), mkdir("CONSUL", [mkfile("config.json")])]),
      mkfile("hOsts"),
    ]);
    const original = _.cloneDeep(tree);

    downcaseFileNames(tree);

    expect(tree).toEqual(original);
  });

  test("downcase file names", () => {
    const tree = mkdir("/", [
      mkdir("eTc", [mkdir("NgiNx"), mkdir("CONSUL", [mkfile("config.JSON")])]),
      mkfile("hOsts"),
    ]);
    const actual = downcaseFileNames(tree);

    const expected = {
      children: [
        {
          children: [
            {
              name: "NgiNx",
            },
            {
              children: [{ name: "config.json" }],
              name: "CONSUL",
            },
          ],
          name: "eTc",
        },
        { name: "hosts" },
      ],
      name: "/",
    };

    expect(actual).toMatchObject(expected);
  });

  test("return full copy", () => {
    const tree = mkdir("/", [
      mkdir("eTc", [
        mkdir("NgiNx", [], { size: 4000 }),
        mkdir("CONSUL", [mkfile("config.JSON", { uid: 0 })]),
      ]),
      mkfile("hOsts"),
    ]);
    const actual = downcaseFileNames(tree);

    const expected = {
      children: [
        {
          children: [
            {
              meta: { size: 4000 },
              name: "NgiNx",
            },
            {
              children: [{ meta: { uid: 0 }, name: "config.json" }],
              name: "CONSUL",
            },
          ],
          name: "eTc",
        },
        { name: "hosts" },
      ],
      meta: {},
      name: "/",
    };

    expect(actual).toMatchObject(expected);
  });

  test("meta is immutable", () => {
    const tree = mkdir(
      "/",
      [
        mkdir("eTc", [
          mkdir("NgiNx"),
          mkdir("CONSUL", [mkfile("config.json")]),
        ]),
        mkfile("hOsts"),
      ],
      { lala: "hexlet" }
    );

    const processedTree = downcaseFileNames(tree);
    processedTree.meta.lala = "gotcha";

    expect(tree.meta).toEqual({ lala: "hexlet" });
  });
});
