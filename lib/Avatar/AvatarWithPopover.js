import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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
class AvatarWithPopover extends Component {
  state = {
    showing: false
  };

  render() {
    const popover = (
      <Popover id={this.props.email} className={this.props.popoverClass}>
        {this.props.children}
      </Popover>
    );

    const onEnter = () => {
      this.setState({ showing: true });
    };
    const onExited = () => {
      this.setState({ showing: false });
    };

    const activeClass = cx({
      'is-active': this.state.showing
    });

    return (
      <OverlayTrigger
        trigger={this.props.triggerEvent}
        placement={this.props.overlayPosition}
        overlay={popover}
        onEnter={onEnter}
        onExited={onExited}
        rootClose
      >
        <button
          className={`button button--icon-only avatar__wrapper ${activeClass}`}
        >
          <Avatar {...this.props} className="avatar--with-toggle" />
          {this.props.caret && <Icon name="caret" className="avatar__caret" />}
        </button>
      </OverlayTrigger>
    );
  }
}

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
