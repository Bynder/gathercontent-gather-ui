import React from 'react';
import PropTypes from 'prop-types';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from '../PopoverWrapper';
import { Avatar, Icon } from '../';

/**
 * @usage
 *
 * <AvatarWithPopover
 *  name="Poppy Cox"
 *  email="poppycox@gmail.com"
 *  >
 *   ... popover content
 * </AvatarWithPopover>
 */
const AvatarWithPopover = props => {
  const popover = (
    <Popover id={props.email} className={props.popoverClass}>
      {props.children}
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger={props.triggerEvent}
      placement={props.overlayPosition}
      overlay={popover}
    >
      <button className="button button--icon-only avatar__wrapper">
        <Avatar {...props} className="avatar--with-toggle" />
        {props.caret && <Icon name="caret" className="avatar__caret" />}
      </button>
    </OverlayTrigger>
  );
};

AvatarWithPopover.defaultProps = {
  overlayPosition: 'bottom',
  triggerEvent: ['hover', 'focus'],
  isHighlighted: false,
  caret: false,
  popoverClass: '',
  children: []
};

AvatarWithPopover.propTypes = {
  triggerEvent: PropTypes.arrayOf(PropTypes.string),
  overlayPosition: PropTypes.string,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  caret: PropTypes.bool,
  popoverClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

export default AvatarWithPopover;
