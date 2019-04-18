# FeatureList
A list of features.

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| title               | String | n/a       | Yes      | The title for the list of features.          |
| children            | Node | n/a       | Yes      | Body of the feature list. |

# FeatureListItem
A list item with a single feature.

### Props

| Name                | Type          | Default   | Required | Description                                |
| ------------------- |-------------- | --------- | -------- |------------------------------------------- |
| children            | String / Node | n/a        | Yes       | Contents of the feature list item.   |

###Usage
```
<FeatureList title="Features">
    <FeatureListItem>
        Feature name
    </FeatureListItem>
</FeatureList>
```
