# PricingToggle
A component which toggles between monthly or annually (depending on children passed).

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| children            | Node | n/a       | Yes      | Body of the pricing toggle wrapper. |

# PricingToggleItem

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| children            | String | n/a       | Yes      | Item text for the toggle. |
| onClick            | Function | n/a       | Yes      | A function which is called on click. |
| savings            | String | null       | No      | Text content promoting the savings for this option. |
| isActive            | Bool | false       | No      | The active state of the item. |

###Usage
```
<PricingToggle>
    <PricingToggleItem
      onClick={() => {}}
      savings="Save 20%"
      isActive
    >
        Pay annually
    </PricingToggleItem>
    <PricingToggleItem onClick={() => {}}>Pay monthly</PricingToggleItem>
</PricingToggle>
```
