# GatherContent UI Library

**Warning: This is still an experimental repository and all commands and functionality are bound to change.**
UI component library for all GatherContent components.

This uses [React Storybook](https://github.com/storybooks/react-storybook) to showcase and host the development of the UI components used at GatherContent.

## Developing the library

1. Download the repository and run `npm run install`
2. Make changes to the components living on the `/lib` folder
3. Preview changes by running the live style guide, using `npm run storybook` and pointing your browser to `http://localhost:6006/`
4. Watch for file changes and rebuild with `npm run build:watch` (useful when you link your local version of `gather-ui` in the app)

## Linking the library

[You can use `npm link` to link your local version of this library to the `node_modules` in your app.](https://github.com/gathercontent/app/blob/master/webapp/README.md#linking-gather-content-ui)

For this to work, you also need to run `npm link react` in this repository.
[Original issue here](https://github.com/facebook/react/issues/15315#issuecomment-479802153)

## Running the test suite

Tests live under the `tests` folder and should be ran using `npm run test`.
To develop the components, a TDD runner is available by running `npm run tdd`

## Building for production

To build the components to be consumed by any application, both JavaScript and CSS files need to be generated.
Running `npm run build` will:

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

## Deploying the Library

The library will automatically deploy when a new tag is pushed to the master branch. The easiest way to do this is to run `git pull --tags`, followed by `npm version <major | minor | patch>` followed by `git push origin --tags` and `git push`.
