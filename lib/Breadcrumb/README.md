# Breadcrumb
A breadcrumb navigation component.

## Usage

### Props

| Name                  | Type          | Default       | Required | Description                                         |
| --------------------- |-------------- | ------------- | -------- |---------------------------------------------------- |
| children              | node(s)       | n/a           | Yes      | Contents of the breadcrumb. Each child is wrapped in a div with class.  |
| className             | String        | `'`           | No       | An additional class which is appended to the container.  |

```
<Breadcrumb>
  <a href="/">Home</a>
  <a href="/">Products</a>
  <a href="/">Category</a>
  <a href="/">Product</a>
</Breadcrumb>
```
