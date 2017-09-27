import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

const TooltipWrapper = props => {
  const overlay = (
    <Tooltip className={props.className} id={props.id}>
      {props.tooltipText}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      overlay={overlay}
      placement={props.placement}
      trigger={props.trigger}
    >
      <span>{props.children}</span>
    </OverlayTrigger>
  );
};

TooltipWrapper.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.string,
  trigger: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  tooltipText: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired
};

TooltipWrapper.defaultProps = {
  className: '',
  placement: 'bottom',
  trigger: ['hover', 'focus']
};

export default TooltipWrapper;
