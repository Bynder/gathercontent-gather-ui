# Windowing

A selection of components to give you virtualisation.

## How does it work?

It calculates the number of components that are in view so you can render a subset of UI within a container. It does this by using a number of properties like scrollTop, containerHeight and the height of each component (this is currently fixed).

## Usage

Windowing uses context, which can be consumed using the existing compound components or replaced by any custom components.

### Props

#### `<Windowing />`

This component holds the context for Windowing.

| Name            | Type        | Default | Required | Description                                                                 |
| --------------- | ----------- | ------- | -------- | --------------------------------------------------------------------------- |
| children        | node        | N/A     | Yes      | The children of the provider.                                               |
| itemHeight      | number (px) | N/A     | Yes      | The pixel height of each individual item.                                   |
| containerHeight | number (px) | 0       | No       | The pixel height of the window.                                             |
| debounceTimer   | number (ms) | 15      | No       | The debounce time in milliseconds for the scrolling update.                 |
| buffer          | number      | 10      | No       | The number of items in the buffer.                                          |
| allIds          | array       | N/A     | Yes      | An array holding the id of every item that windowing could possibly render. |

##### Provides

| Name                  | Type        | Description                                                            |
| --------------------- | ----------- | ---------------------------------------------------------------------- |
| scrollTop             | number      | The number of pixels that have been scrolled                           |
| setScrollTop          | func        | A function to set the `scrollTop`                                      |
| renderIndexes         | object      | The calculated offset and length of the items that should be rendered. |
| itemHeight            | number (px) | The height of each item.                                               |
| baseItemStyle         | object      | The base style for an item.                                            |
| setHeight             | func        | A function to set the `height`                                         |
| debounceTimer         | number (ms) | The amount of ms to debounce the scrolling event.                      |
| containerHeight       | number (px) | The height of the container.                                           |
| allWindowingIds       | array       | Every id that could be in the window.                                  |
| addIds                | func        | A function to add ids to the `allWindowingIds` array.                  |
| removeIds             | func        | A function to remove ids to the `allWindowingIds` array.               |
| inViewWindowingIds    | array       | An array of id's to be rendered.                                       |
| setInViewWindowingIds | func        | A function to set the id's to be rendered                              |

#### `<Windowing.Scroller />`

The `Scroller` is responsible for handling the scrolling event and setting which items are in the view.

| Name     | Type | Default | Required | Description   |
| -------- | ---- | ------- | -------- | ------------- |
| children | node | N/A     | Yes      | The children. |

#### `<Windowing.List />`

The `List` renders a container for the list, sets it to the height of all of the id's combined, and will give the items inside the window to it's children.

| Name     | Type | Default | Required | Description   |
| -------- | ---- | ------- | -------- | ------------- |
| children | node | N/A     | Yes      | The children. |

#### `<Windowing.Item />`

The `Item` calculates it's `top` value based off it's index in the `allWindowingIds` and the items height.

| Name                    | Type   | Default | Required | Description                                            |
| ----------------------- | ------ | ------- | -------- | ------------------------------------------------------ |
| children                | node   | N/A     | Yes      | The children.                                          |
| relativeToRenderIndexes | bool   | true    | No       | DEPRECATED                                             |
| index                   | number | N/A     | Yes      | The index of the item in relation to `allWindowingIds` |
| style                   | object | {}      | No       | Style to be applied to the item wrapper                |
