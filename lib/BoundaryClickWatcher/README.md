#BoundaryClickWatcher
Wrap a component in BoundaryClickWatcher to detect clicks on our outside of the component. See an example of this in the Conversation story.

##Usage

BoundaryClickWatcher has a boolean (boundaryIsActive) which is set to true when it detects an inner click and back to false when it detects a click outside of the boundary. The value of this can be passed onto the child component like so:

```
<BoundaryClickWatcher>
  {(boundaryIsActive) => {
    return (
      <My Component
        boolProp={boundaryIsActive}
      />
    )
  }}
</BoundaryClickWatcher>
```

*(Optional)* It has two props `insideClickHandler` and `outsideClickHandler` you can pass in actions for added custom behaviour on inner or outer click.

```
<BoundaryClickWatcher insideClickHandler={someFunc} outsideClickHandler={someOtherFunc}>
  {(boundaryIsActive) => {
    return (
      <My Component
        boolProp={boundaryIsActive}
      />
    )
  }}
</BoundaryClickWatcher>
```
It's also not necessary to have the child component as a function, you can pass it in as a regular node. Usage for this is if you only want to use `insideClickHandler` and `outsideClickHandler`.

```
<BoundaryClickWatcher insideClickHandler={someFunc} outsideClickHandler={someOtherFunc}>
    <My Component />
  }}
</BoundaryClickWatcher>
```
