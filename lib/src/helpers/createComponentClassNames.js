import cx from 'classnames';

function createComponentClassNames(
  baseClassNames,
  componentProps = {},
  conditionalClassNames = {},
  ...additionalClassNames
) {
  return cx(
    baseClassNames,
    componentProps.className,
    conditionalClassNames,
    ...additionalClassNames
  );
}

export { createComponentClassNames };
