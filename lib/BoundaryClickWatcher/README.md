# BoundaryClickWatcher
Wrap a component in BoundaryClickWatcher to detect clicks on our outside of the component. See an example of this in the Conversation story.

## Usage

BoundaryClickWatcher uses the render callback pattern and returns a boolean.

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| insideClickHandler    | Function      | `() {};`      | No       | Executes when the user clicks inside the boundary.  |
| outsideClickHandler   | Function      | `() {};`      | No       | Executes when the user clicks Outside the boundary. |

```
<BoundaryClickWatcher insideClickHandler={someFunc} outsideClickHandler={someOtherFunc}>
  {(boundaryIsActive) => {
    return (
      <MyComponent
        boolProp={boundaryIsActive}
      />
    )
  }}
</BoundaryClickWatcher>
```

It's not necessary to have the child component as a function, you can pass it in as a regular node. Usage for this is if you only want to use `insideClickHandler` and `outsideClickHandler`.

```
<BoundaryClickWatcher insideClickHandler={someFunc} outsideClickHandler={someOtherFunc}>
    <MyComponent />
  }}
</BoundaryClickWatcher>
```
