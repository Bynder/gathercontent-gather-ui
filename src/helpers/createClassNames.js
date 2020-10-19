import cx from 'classnames';

function createClassNames(baseClassName, props = {}, conditionalClassNames = {}) {
  return cx(baseClassName, props.className, conditionalClassNames);
}

export { createClassNames };
