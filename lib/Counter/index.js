import React from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';

export function Counter({ children, className }) {
  const classes = cx(
    className,
    'counter rounded-small font-semi-bold border-solid border-2 border-white bg-blue-primary text-white p-px'
  );

  return <span className={classes}>{children}</span>;
}

Counter.propTypes = {
  children: node.isRequired,
  className: string
};

Counter.defaultProps = {
  className: ''
};
