import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from '../Tooltip/';
import { Avatar } from '../';

const AvatarWithTooltip = (props) => {
  const tooltip = (
    <Tooltip id={props.email}>
      <div className="avatar__tooltip">
        <p className="avatar__tooltip-name">{props.name}</p>
        <p className="avatar__tooltip-email">{props.email}</p>
        { props.isAssigned &&
          <span className="avatar__pillbox">Assigned</span>
        }
      </div>
    </Tooltip>
  );

  return (
    <OverlayTrigger
      trigger={props.triggerEvent}
      placement={props.tooltipPosition}
      overlay={tooltip}
    >
      <span>
        <Avatar {...props} />
      </span>
    </OverlayTrigger>
  );
};

AvatarWithTooltip.defaultProps = {
  tooltipPosition: 'bottom',
  triggerEvent: 'hover',
  isAssigned: false,
};

AvatarWithTooltip.propTypes = {
  triggerEvent: PropTypes.string,
  tooltipPosition: PropTypes.string,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isAssigned: PropTypes.bool,
};

export default AvatarWithTooltip;
