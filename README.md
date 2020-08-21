## Steps history

- Normally files in `./node_modules/**` will not be transpiled. Babel just convert `import` to `require`.
- Options of babel Ref: https://babeljs.io/docs/en/options#plugin-and-preset-options
- `Copy files` that will not be compiled, Ref: https://babeljs.io/docs/en/babel-cli#copy-files

#### Tasks you can try

```
$ yarn clean
$ yarn start
$ yarn error
```

#### Basic

```
$ yarn init
$ yarn add @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-async-to-generator
$ vim package.json
$ cat package.json
  {
    "name": "babel-study",
    "version": "1.0.0",
    "main": "index.js",
    "license": "MIT",
    "dependencies": {
      "@babel/cli": "^7.10.5",
      "@babel/core": "^7.11.4",
      "@babel/preset-env": "^7.11.0"
    },
    "babel": {
      "presets": ["@babel/preset-env"]
    }
  }
$ yarn babel src -d dist
```

- You can start to use babel with `preset-env` as a good starting point.
- Async/Await supported in babel-7, Ref: https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator
- About `regeneratorRuntime` is undefined issue:

```
$ yarn add core-js regenerator-runtime
```

```
# If you dont have entrypoint config of webpack, you can just import them in your entrypoint file ex: "index.js"
import "core-js/stable";
import "regenerator-runtime/runtime";
```

#### Add 3rd party library
- Its also not able to be transpiled by babel but rather only convert `import` to `require`

```
$ yarn add node-fetch
```

### Other CLI example

```
# skip to handle ignore files
$ yarn babel src -d dist --ignore ./src/node_modules && node dist/index.js

# skip to handle ignore files but copy them to distribution
$ yarn babel src -d dist --ignore ./src/node_modules --copy-files && node dist/index.js
```

```
# Caveat!! Set up ignore option in config file, but it will not work well.
# Ref: https://github.com/chase-moskal/babel-broken/commit/872d4921fd4d42f576e105c45610465aeb5be02d

$ cp -R ./node_modules ./src/node_modules
$ yarn babel src -d dist && node dist/index.js  # This will cause error.
```

- Git squash commit to one, Ref: https://stackoverflow.com/questions/598672/squash-the-first-two-commits-in-git

```
git rebase -i --root HEAD
```
