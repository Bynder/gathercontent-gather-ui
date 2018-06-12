import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

const TooltipWrapper = ({ id, className, tooltipText, children, ...rest }) => {
  const overlay = (
    <Tooltip className={className} id={id}>
      {tooltipText}
    </Tooltip>
  );

  return (
    <OverlayTrigger {...rest} overlay={overlay}>
      <span>{children}</span>
    </OverlayTrigger>
  );
};

TooltipWrapper.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.string,
  trigger: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: ['hover', 'focus']
};

export default TooltipWrapper;
