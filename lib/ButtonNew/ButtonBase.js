/* eslint-disable react/button-has-type */
import React from 'react';
import { string, node } from 'prop-types';

function ButtonBase({ children, ...rest }) {
  return <button {...rest}>{children}</button>;
}

ButtonBase.propTypes = {
  type: string,
  children: node.isRequired
};

ButtonBase.defaultProps = {
  type: 'button'
};

export { ButtonBase };
