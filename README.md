<div align="center">

# Content Workflow UI Component Library 🧩

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://637e11221b165a5f068e36ca-brffybdhva.chromatic.com)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/Bynder/gathercontent-api/actions)

> [!WARNING]
> This library is being sunsetted. There will be occasional updates for bug fixes and new components we require for legacy pages, but for the most part this is no longer being maintained.

UI component library for all GatherContent components.

**[🧑‍🎨 Usage](#-usage)** •
**[💻 Local development](#-local-development)** •
**[🎨 Code styling / linting](#-code-styling-and-linting)** •
**[🧑‍🔬 Testing](#-how-to-run-tests)** •
**[🏗 Setting up dependencies](#-setting-up-dependencies)**

**[⌨ Useful commands](#-useful-commands)** •
**[🚀 How to deploy](#-how-to-deploy)** •
**[👥 Code owners](#-code-owners)** •
**[🔗 Useful links](#-useful-links)**

</div>

## 🧑‍🎨 Usage

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

The library is available on npm.

`npm install gather-content-ui`

Using the components is just like any other npm module. For e.g.:

```js
// Import the button component
import { Button } from 'gather-content-ui';

// Require once all the CSS directly from the node_modules folder
require('gather-ui/dist/styles.css');
```

## 💻 Local Development

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

1. Download the repository and run `npm ci`
2. Make changes to the components living on the `/lib` folder
3. Preview changes by running the live style guide, using `npm run storybook` and pointing your browser to `http://localhost:6006/`
4. Watch for file changes and rebuild with `npm run build:watch` (useful when you link your local version of `gather-ui` in the app)

## 🎨 Code Styling and Linting

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

We use both eslint and prettier to lint and format our code. You can run these commands to check your code;

```shell
npm run lint
```

If you would like to prettier to automatically fix the issues you can run:

```shell
npm run format:js
```

Furthermore, as we use TypeScript we also have the TypeScript compiler to check our code. You can run this command to check your code;

```shell
npm run type-check
```

### Stylelint

We also use stylelint to be able to lint and format our CSS. You can run these commands to check your code;

```shell
npm run lint:style
npm run format:style
```

## 🧑‍🔬 How to run tests

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

Tests live alongside the code within a `.specs` folder and should be ran using `npm run test`.

## 🏗 Setting up dependencies

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

All the project dependencies are listed in the `package.json` file. You can install them using `npm ci`.
NPM should have been installed when you ran through the local development in `docker-base`. However, if you don't have
it installed run `brew install node@18` to install it.

## ⌨ Useful commands

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

### Linking the library

You can use `npm link` to link your local version of this library to the `node_modules` in your app.

For this to work, you also need to run `npm link react` in this repository.
[Original issue here](https://github.com/facebook/react/issues/15315#issuecomment-479802153)

## 🚀 How to deploy

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

### 🧱 Building for production

To build the components to be consumed by any application, both JavaScript and CSS files need to be generated.
Running `npm run build` will:

1. Generate ES5 compliant versions of each component in `/dist`
2. Generate a `.css` files containing all the concatenated component styles.
3. Copy over Sass configuration files to the `/dist` folder in order to be consumed externally.

### 📰 Publishing

The best and easiest way to publish this library to npm is to use our GitHub action.

1. Head on over to the actions tab
2. Select the "publish-npm" workflow
3. Click the "Run workflow" dropdown
4. Select a branch (this will just be main 99.99% of the time) and a version
5. Click "Run workflow"
6. Sit back and relax as the robots publish it for you! 🤖

## 👥 [Code owners](CODEOWNERS)

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

[**@Bynder/content-workflow-frontend →**](https://github.com/orgs/Bynder/teams/content-workflow-frontend)

## 🔗 Useful links

<sup>[(Back to top)](#content-workflow-ui-component-library-)</sup>

<a href="https://637e11221b165a5f068e36ca-brffybdhva.chromatic.com" target="_blank">**Storybook →**</a>

### Related Repositories

<a href="https://github.com/Bynder/gathercontent-mono" target="_blank">**Mono →**</a>

<a href="https://github.com/Bynder/gathercontent-csr" target="_blank">**CSR →**</a>
