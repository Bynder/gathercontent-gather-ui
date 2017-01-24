# GatherContent UI Library

**Warning: This is still an experimental repository and all commands and functionality are bound to change.**
UI component library for all GatherContent components.

## Developing the library

1. Download the repository and run `npm install`
2. Make changes to the components living on the `/lib` folder
3. Preview changes by running the live style guide, using `npm run storybook` and pointing your browser to `http://localhost:6006/`

## Running the test suite

Tests live under the `tests` folder and should be ran using `npm run test`.
To develop the components, a TDD runner is available by running `npm run tdd`

## Building for production

To build the components to be consumed by any application, both JavaScript and CSS files need to be generated.
Running `npm build` will:

1. Generate ES5 compliant versions of each component in `/dist`
2. Generate a `.css` files containing all the concatenated component styles.

## Using the library

Using the components is just like any other npm module. For e.g.:

```js
// Import the button component
import { Button } from 'gather-ui';

// Require once all the CSS directly from the node_modules folder
require('gather-ui/dist/styles.css');
```

## External dependencies

This particular version of the Styleguide depends on the Bootstrap and FontAwesome libraries. These do not ship with the components' CSS and should be included separately wherever they are consumed.
