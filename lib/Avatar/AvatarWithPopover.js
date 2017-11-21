import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from '../PopoverWrapper';
import { Avatar } from '../';

/**
 * @usage
 *
 * <AvatarWithPopover email="poppycox@gmail.com" name="Poppy Cox" pillboxText="Assigned" />
 */
const AvatarWithPopover = props => {
  const popover = <Popover id={props.email}>{props.children}</Popover>;

  return (
    <OverlayTrigger
      trigger={props.triggerEvent}
      placement={props.overlayPosition}
      overlay={popover}
    >
      <span className="avatar__wrapper">
        <Avatar {...props} className="avatar--with-toggle" />
      </span>
    </OverlayTrigger>
  );
};

AvatarWithPopover.defaultProps = {
  overlayPosition: 'bottom',
  triggerEvent: ['hover', 'focus'],
  isHighlighted: false,
  children: []
};

AvatarWithPopover.propTypes = {
  triggerEvent: PropTypes.arrayOf(PropTypes.string),
  overlayPosition: PropTypes.string,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

export default AvatarWithPopover;
