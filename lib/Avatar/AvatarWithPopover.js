import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import uuid from 'uuid/v1';
import Avatar from '.';
import Icon from '../Icon';
import Dropdown from '../Dropdown';

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

 function AvatarWithPopover({ triggerEvent, email, name, caret, popoverClass, children, collapseDropdown, ...rest }) {

   const classes = showContent => cx('button button--icon-only avatar__wrapper', {
     'is-active': showContent
   });
   const useHover = triggerEvent.includes('onHover');

   return (
     <Dropdown id={uuid()} className="overflow-visible">
      {({ setShowContent, showContent }) => (
        <>
          <Dropdown.Trigger
            triggerClassName={classes(showContent)}
            onMouseEnter={useHover ? () => {
              setShowContent(true)
            } : null}
            onMouseLeave={useHover ? () => {
              setShowContent(false)
            } : null}
          >
            <Avatar email={email} name={name} {...rest} className="avatar--with-toggle" />
            {!!caret && <Icon name="down" className="avatar__caret ml-2" />}
          </Dropdown.Trigger>
          {showContent && (
            <Dropdown.Content className={popoverClass} collapse={collapseDropdown}>
              {children}
            </Dropdown.Content>
          )}
        </>
      )}
     </Dropdown>
   )
 };

 AvatarWithPopover.defaultProps = {
   overlayPosition: 'bottom',
   triggerEvent: ['onHover', 'onClick'],
   caret: false,
   popoverClass: '',
   children: [],
   collapseDropdown: false
 };

export default AvatarWithPopover;
