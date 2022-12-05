const { mkdir, mkfile } = require("./lib/virtualFS");

// nodejs - package # директория(метаданные: { hidden: true })
// ├── Makefile # файл
// ├── README.md # файл
// ├── dist # пустая директория
// ├── __tests__ # директория
// │   └── half.test.js # файл(метаданные: { type: 'text/javascript' })
// ├── babel.config.js # файл(метаданные: { type: 'text/javascript' })
// └── node_modules # директория(метаданные: { owner: 'root', hidden: false })
//     └── @babel # директория
//         └── cli # директория
//             └── LICENSE # файл
function generate() {
  return mkdir(
    "nodejs-package",
    [
      mkfile("Makefile"),
      mkfile("README.md"),
      mkdir("dist"),
      mkdir("__tests__", [mkfile("half.test.js", { type: "text/javascript" })]),
      mkfile("babel.config.js", { type: "text/javascript" }),
      mkdir(
        "node_modules",
        [mkdir("@babel", [mkdir("cli", [mkfile("LICENSE")])])],
        { owner: "root", hidden: false }
      ),
    ],
    { hidden: true }
  );
}
// END

module.exports = { generate };
