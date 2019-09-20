# Windowing

A selection of components to give you virtualisation. 

## How does it work?

A `div` is rendered that is high enough to hold every item, it is simply calculated as follows:

`listHeight = itemHeight * allWindowingIds`

Each `item` has to have the same height, making all of this maths a lot easier.

This `div` is wrapped in a container, with a set height, the `containerHeight`. This container is our window to look 
at the long list of items, it restricts the number of items we can see at a time though! 

When a scrolling event is triggered on the long list of items we retrieve a value called `scrollTop`, this represents 
the number of pixels from the top of the list that we have scrolled.

With all of these values we can calculate which items can be seen through the window. Here is a quick example of the 
window being at the top of the list.

#### Example 1 - Beginning of list

`allWindowingIds`: [... , 40]  
`itemHeight`: 10px    
`listHeight`: 400px  
`containerHeight`: 100px  
`scrollTop`: 0px  

`numberOfItemsVisible`: 10  
`inViewWindowingIds`: [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

Here is an example of the window being part way through the list.

#### Example 2 - middle of list

`allWindowingIds`: [... , 40]  
`itemHeight`: 10px    
`listHeight`: 400px  
`containerHeight`: 100px  
`scrollTop`: 50px  

`numberOfItemsVisible`: 10  
`inViewWindowingIds`: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

We can set a buffer to ensure the user experience is much nicer. A buffer is the amount of items we render outside of 
the window. This ensures that there won't be any "loading" items on the page, it will all happen in the buffer. Here is an example:

#### Example 3 - With buffer

`allWindowingIds`: [... , 40]  
`itemHeight`: 10px    
`listHeight`: 400px  
`containerHeight`: 100px  
`buffer`: 5   
`scrollTop`: 50px  

`numberOfItemsVisible`: 20 (10 + 5 (buffer top) + 5 (buffer bottom))  
`inViewWindowingIds`: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

## Usage

Windowing was designed to be flexible, any of these compound components can be switched out for a custom one, all of the 
data can be retrieved from the context provided by `Windowing`.

### Props

#### `<Windowing />`

| Name            | Type        | Default | Required | Description                                                                 |
| --------------- | ----------- | ------- | -------- | --------------------------------------------------------------------------- |
| children        | node        | N/A     | Yes      | The children of the provider.                                               |
| itemHeight      | number (px) | N/A     | Yes      | The pixel height of each individual item.                                   |
| containerHeight | number (px) | 0       | No       | The pixel height of the window.                                             |
| debounceTimer   | number (ms) | 15      | No       | The debounce time in milliseconds for the scrolling update.                 |
| buffer          | number      | 10      | No       | The number of items in the buffer.                                          |
| allIds          | array       | N/A     | Yes      | An array holding the id of every item that windowing could possibly render. |

#### `<Windowing.Scroller />`

| Name     | Type | Default | Required | Description   |
| -------- | ---- | ------- | -------- | ------------- |
| children | node | N/A     | Yes      | The children. |

#### `<Windowing.List />`

| Name     | Type | Default | Required | Description   |
| -------- | ---- | ------- | -------- | ------------- |
| children | node | N/A     | Yes      | The children. |

#### `<Windowing.Item />`

| Name                    | Type   | Default | Required | Description                                            |
| ----------------------- | ------ | ------- | -------- | ------------------------------------------------------ |
| children                | node   | N/A     | Yes      | The children.                                          |
| relativeToRenderIndexes | bool   | true    | No       | DEPRECATED                                             |
| index                   | number | N/A     | Yes      | The index of the item in relation to `allWindowingIds` |
| style                   | object | {}      | No       | Style to be applied to the item wrapper                |
