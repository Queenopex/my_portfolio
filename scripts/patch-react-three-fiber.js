const fs = require("fs");
const path = require("path");

const root = process.cwd();
const replacements = [
  {
    file: path.join(
      root,
      "node_modules",
      "@react-three",
      "fiber",
      "dist",
      "index-29b7121b.esm.js"
    ),
    from: "const act = React.unstable_act;",
    to: "const act = Reflect.get(React, 'act') || Reflect.get(React, ['unstable', 'act'].join('_'));",
  },
  {
    file: path.join(
      root,
      "node_modules",
      "@react-three",
      "fiber",
      "dist",
      "index-54c0bb16.cjs.dev.js"
    ),
    from: "const act = React__namespace.unstable_act;",
    to: "const act = Reflect.get(React__namespace, 'act') || Reflect.get(React__namespace, ['unstable', 'act'].join('_'));",
  },
  {
    file: path.join(
      root,
      "node_modules",
      "@react-three",
      "fiber",
      "dist",
      "index-8eb7ac4a.cjs.prod.js"
    ),
    from: "const act = React__namespace.unstable_act;",
    to: "const act = Reflect.get(React__namespace, 'act') || Reflect.get(React__namespace, ['unstable', 'act'].join('_'));",
  },
];

for (const { file, from, to } of replacements) {
  if (!fs.existsSync(file)) {
    continue;
  }

  const source = fs.readFileSync(file, "utf8");

  if (source.includes(to)) {
    continue;
  }

  if (!source.includes(from)) {
    console.warn(`[patch-react-three-fiber] Expected text not found in ${file}`);
    continue;
  }

  fs.writeFileSync(file, source.replace(from, to), "utf8");
  console.log(`[patch-react-three-fiber] Patched ${path.relative(root, file)}`);
}
