import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/lib/Popover';

const Tooltip = props => (
  <Popover className={props.className} id={props.id} {...props}>
    {props.children}
  </Popover>
);

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
  className: '',
};


export default Tooltip;
