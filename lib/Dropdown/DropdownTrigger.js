import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../index';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownTrigger = ({ children, useButton, ...props }, context) => {
  const { toggleShowContent } = context[GATHER_UI_DROPDOWN];

  return useButton ? (
    <Button {...props} clickHandler={toggleShowContent}>
      {children}
    </Button>
  ) : (
    <button
      {...props}
      className="dropdown__trigger"
      onClick={toggleShowContent}
    >
      {children}
    </button>
  );
};

DropdownTrigger.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  useButton: PropTypes.bool
};

DropdownTrigger.defaultProps = {
  useButton: false
};

export default DropdownTrigger;
