import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Overlay from 'react-bootstrap/lib/Overlay';
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

  renderTrigger(clickEvent = null) {
    const classes = cx('button button--icon-only avatar__wrapper', {
      'is-active': this.state.showing
    });

    const props = {
      className: classes
    };

    if (clickEvent !== null) {
      props.onClick = clickEvent;
    }

    return (
      <button {...props}>
        <span
          className="avatar__target"
          ref={target => {
            this.target = target;
          }}
        >
          <Avatar {...this.props} className="avatar--with-toggle" />
        </span>
        {this.props.caret && <Icon name="caret" className="avatar__caret" />}
      </button>
    );
  }

  renderOverlay(popover) {
    const togglePopover = () => this.setState({ showing: !this.state.showing });

    const onHide = () => {
      this.setState({ showing: false });
    };

    return (
      <span>
        {this.renderTrigger(togglePopover)}
        <Overlay
          show={this.state.showing}
          onHide={onHide}
          target={this.target}
          placement={this.props.overlayPosition}
          rootClose
        >
          {popover}
        </Overlay>
      </span>
    );
  }

  renderOverlayTrigger(popover) {
    const onEnter = () => {
      this.setState({ showing: true });
    };
    const onExited = () => {
      this.setState({ showing: false });
    };

    return (
      <span>
        <OverlayTrigger
          trigger={this.props.triggerEvent}
          placement={this.props.overlayPosition}
          overlay={popover}
          onEnter={onEnter}
          onExited={onExited}
          rootClose
        >
          {this.renderTrigger()}
        </OverlayTrigger>
      </span>
    );
  }

  render() {
    const popover = (
      <Popover id={this.props.email} className={this.props.popoverClass}>
        {this.props.children}
      </Popover>
    );

    if (this.props.triggerEvent === 'click') {
      return this.renderOverlay(popover);
    }

    return this.renderOverlayTrigger(popover);
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
  triggerEvent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
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
