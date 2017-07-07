import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/lib/Popover';

const Tooltip = props => (
  <Popover className={props.className} {...props}>
    {props.children}
  </Popover>
);

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
};

Tooltip.defaultProps = {
  className: '',
};


export default Tooltip;
