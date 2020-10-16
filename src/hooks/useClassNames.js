import cx from 'classnames';

function useClassNames(baseClassName, props = {}, conditionalClassNames = {}) {
  return cx(baseClassName, props.className, conditionalClassNames);
}

export { useClassNames };
