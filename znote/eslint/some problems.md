### `parserOptions.project`报错

```js
const path = require('path')

// .eslintrc.js
export default {
  // ...
  // parserOptions: {
  //   project: path.join(__dirname, './tsconfig.json')
  // },
  parser: '@typescript-eslint/parser'
}
```

```json
<!-- tsconfig.json -->
{
  "include": ["src/**/*", ".eslintrc.js", "rollup.config.js"],
}
```