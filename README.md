<h1 width="100%"  align="middle">NAME OF YOUR MODULE</h1>

<!-- Replace with your own logo -->
<img src="https://cdn.rawgit.com/namshi/dollar-dom/master/dollar-symbol.svg" height="150" width="100%" align="middle"/>

> 👬 Tell something about your npm-module here. With emojis  🙌

<hr>

<!-- change these -->

[![Build Status](https://travis-ci.org/namshi/dollar-dom.svg?branch=master)](https://travis-ci.org/namshi/dollar-dom)
[![Open Source Namshi](https://img.shields.io/badge/open--source-Namshi-blue.svg)](https://github.com/namshi)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<hr>

## Why

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Install

using **npm**

    npm install --save package-name

using **yarn**

    yarn add package-name

If you're using module bundlers like webpack, Browserify or rollup, you can import `$` from **package-name** module:

```js
import {$} from 'package-name';

// or

const {$} = require('package-name');
```

If you wish to include as a script, **package-name** can be included like this:

    <script src="https://unpkg.com/package-name/build/package-name.min.js"></script>

and will be available as a global object named **`packageName`** in the browser.

## API and Examples

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Want to Contribute ?

We love contributions from everyone. 
  1. Fork the repo.
  2. Install dependencies. `yarn install` or `npm install`
  3. We use `AVA` for unit tests. 
      - To run unit tests, `yarn test` or `npm test`
      - To run unit test in --watch mode, `yarn test-watch` or `npm run test-watch`
  4. Implement the changes, and write test cases. Make sure that all unit test pass.
  5. To generate the final build, run `yarn build` or `npm build`.
  6. Push your code and create a Pull Request
      
## Release and publish to NPM

*__Note:__ Make sure you're logged in to NPM before doing this.*

To create a tag and publish to NPM run `npm run publish` or `yarn publish`. This will show an interactive session on terminal, where you can choose the semantic version to publish. After that, the github `release` page will be opened for adding the change logs.

## Licence

MIT @ [YourCompany.com](www.yourcompany.com)
