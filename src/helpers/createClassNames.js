import cx from 'classnames';

function createClassNames(baseClassName, props = {}, conditionalClassNames = {}, ...args) {
  return cx(baseClassName, props.className, conditionalClassNames, ...args);
}

export { createClassNames };
