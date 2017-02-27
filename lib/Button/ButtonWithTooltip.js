import React, { PropTypes } from 'react';
import Button from './index';
import { Tooltip, OverlayTrigger } from 'react-bootstrap/lib';

const ButtonWithTooltip = (props) =>
  <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id={Math.random()}>{ props.tooltipText }</Tooltip>}
  >
    <span className="button--has-tooltip">
      <Button {...props}>
        { props.children }
        <span className="button__helper">?</span>
      </Button>
    </span>
  </OverlayTrigger>;

ButtonWithTooltip.propTypes = {
  tooltipText: PropTypes.string,
  children: PropTypes.string,
};

export default ButtonWithTooltip;
