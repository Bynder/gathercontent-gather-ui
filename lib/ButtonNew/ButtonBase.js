/* eslint-disable react/button-has-type */
import React from 'react';
import { string } from 'proptypes';

function ButtonBase({ ...rest }) {
  return <button {...rest}>Hello, I'm a button</button>;
}

ButtonBase.propTypes = {
  type: string
};

ButtonBase.defaultProps = {
  type: 'button'
};

export { ButtonBase };
