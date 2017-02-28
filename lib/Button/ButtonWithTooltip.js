import React, { PropTypes } from 'react';
import Button from './index';
import { Tooltip, OverlayTrigger } from 'react-bootstrap/lib';

const ButtonWithTooltip = (props) => {
  const tooltip = (
    <Tooltip id={Math.random()}>
      <div className={`tooltip--${props.tooltipSize}`}>
        { props.tooltipText }
      </div>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={props.tooltipPosition}
      overlay={tooltip}
    >
      <span className="button--has-tooltip">
        <Button {...props}>
          { props.children }
          <span className="button__helper">?</span>
        </Button>
      </span>
    </OverlayTrigger>
  );
};

ButtonWithTooltip.defaultProps = {
  tooltipPosition: 'bottom',
};

ButtonWithTooltip.propTypes = {
  tooltipText: PropTypes.string,
  tooltipSize: PropTypes.string,
  tooltipPosition: PropTypes.string,
  children: PropTypes.string,
};

export default ButtonWithTooltip;
