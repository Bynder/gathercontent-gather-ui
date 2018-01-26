# TopBar
A collection of components used to render conversations

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| fixed               | Boolean       | `false`   | No       | The fixed option.                                                          |
| useDarkTheme        | Boolean       | ''         | No       | applies a dark theme |

```
<TopBar />
```

If you want the TopBar to be fixed to the top of the container give it a fixed attribute

```
<TopBar fixed />
```


# TopBarContent
A collection of components used to render conversations

## Usage
Props are passed down to the [react-bootstrap/col](https://react-bootstrap.github.io/components.html#grid-props-col)

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| left                | Boolean       | `false`   | No       | Left align the content.                                                       |
| center              | Boolean       | `false`   | No       | Center align the content.                                                     |
| right               | Boolean       | `false`   | No       | Right align the content.                                                      |

```
<TopBarContent />
```

# TopBarCell
A collection of components used to render conversations

## Usage

### Props

| Name                | Type          | Default   | Required | Description                                                                   |
| ------------------- |-------------- | --------- | -------- |------------------------------------------------------------------------------ |
| bordered            | Boolean       | `false`   | No       | Add left hand side border.                                                    |

```
<TopBarCell />
```
