import React from 'react';
import Tippy from '@tippyjs/react';
import { v4 as uuid } from 'uuid';
import Avatar from '.';

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

function AvatarWithPopover({
  email,
  name,
  children,
  overlayPosition,
  ...rest
}) {
  const id = uuid();

  return (
    <Tippy
      content={children}
      animation="shift-toward"
      arrow={false}
      placement={overlayPosition}
      trigger="mouseenter focus"
      className="avatar-tooltip__wrapper"
    >
      <span id={id} role="button">
        <Avatar
          email={email}
          name={name}
          {...rest}
          className="avatar--with-toggle"
        />
      </span>
    </Tippy>
  );
}

AvatarWithPopover.defaultProps = {
  overlayPosition: 'top'
};

export default AvatarWithPopover;
