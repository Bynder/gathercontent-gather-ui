import React from 'react';
import cx from 'classnames';
import { node } from 'prop-types';
import { Counter } from '../../Counter';

export function ButtonIconCounter({ children }) {
  const classes = cx(
    'border-solid border-2 border-white',
    'absolute top-0 right-0 mt mr'
  );

  return <Counter className={classes}>{children}</Counter>;
}

ButtonIconCounter.propTypes = {
  children: node.isRequired
};
