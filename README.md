# GatherContent UI Library
[![Build Status](https://travis-ci.org/gathercontent/gather-ui.svg?branch=master)](https://travis-ci.org/gathercontent/gather-ui)

**Warning: This is still an experimental repository and all commands and functionality are bound to change.**
UI component library for all GatherContent components.

This uses [React Storybook](https://github.com/storybooks/react-storybook) to showcase and host the development of the UI components used at GatherContent.

## Developing the library

1. Download the repository and run `yarn install`
2. Make changes to the components living on the `/lib` folder
3. Preview changes by running the live style guide, using `yarn storybook` and pointing your browser to `http://localhost:6006/`

## Running the test suite

Tests live under the `tests` folder and should be ran using `yarn test`.
To develop the components, a TDD runner is available by running `yarn tdd`

## Building for production

To build the components to be consumed by any application, both JavaScript and CSS files need to be generated.
Running `yarn build` will:

1. Generate ES5 compliant versions of each component in `/dist`
2. Generate a `.css` files containing all the concatenated component styles.
3. Copy over Sass configuration files to the `/dist` folder in order to be consumed externally.

## Using the library

The library is available on npm.

`npm install gather-content-ui`

Using the components is just like any other npm module. For e.g.:

```js
// Import the button component
import { Button } from 'gather-content-ui';

// Require once all the CSS directly from the node_modules folder
require('gather-ui/dist/styles.css');
```

## External dependencies

This particular version of the Styleguide depends on the Bootstrap and FontAwesome libraries. These do not ship with the components' CSS and should be included separately wherever they are consumed.

## Deploying the Library
 You will need to login with an NPM account that has access to the package
```
npm version  <major | minor | patch> // We usually go with patch, but minor or major may be required
git push --tags
git push
npm publish
```