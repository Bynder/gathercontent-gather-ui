import React from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-bootstrap/lib/Popover';

const PopoverWrapper = props => (
  <Popover className={props.className} {...props}>
    {props.children}
  </Popover>
);

PopoverWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({}))
  ]).isRequired
};

PopoverWrapper.defaultProps = {
  className: ''
};

export default PopoverWrapper;
