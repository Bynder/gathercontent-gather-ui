import React from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({
  children
}: any) => (
  <div className="button-group">{children}</div>
);

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default ButtonGroup;
