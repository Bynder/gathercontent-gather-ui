import React from 'react';
import Tippy from '@tippyjs/react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
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
}: any) {
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
