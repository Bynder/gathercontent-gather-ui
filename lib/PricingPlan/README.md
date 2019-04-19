# PricingPlan
A component for sharing account plan details.

  title: PropTypes.string,
  price: PropTypes.string,
  priceDesc: PropTypes.node,
  smallPrint: PropTypes.string,
  children: PropTypes.node,
  upgradeButton: PropTypes.node,
  contactButton: PropTypes.node,
  savings: PropTypes.string

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| title               | String   | ''     | No      |  |
| price               | String   | ''     | No      |  |
| priceDesc           | Node     | ''     | No      | The description of the plan. |
| smallPrint          | String   | ''     | No      | Additional details about the plan. |
| children            | Node     | null   | No      | The body for the plan, normally used to render features. |
| upgradeButton       | Node     | null   | No      | A button or link for navigating the user through the upgrade process. |
| contactButton       | Node     | null   | No      | A button or link for navigating the user through the upgrade process. |
| savings             | String   | null   | No      | Text promoting any saving to user may be making on this plan. |
| current             | Bool     | false  | No      | Provides the plan with a highlighted appearance indicating it is the current plan. |

###Usage
```
<PricingPlan price="$25" smallPrint="$1,250 per month" priceDesc="per seat per month" title="Advanced" upgradeButton={upgradeButton} savings="Save $360">
    <FeatureList />
  </PricingPlan>
</Col>
```
