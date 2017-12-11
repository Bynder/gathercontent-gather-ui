import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Overlay from 'react-bootstrap/lib/Overlay';
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
  constructor(props) {
    super(props);

    this.togglePopover = this.togglePopover.bind(this);
    this.hidePopover = this.hidePopover.bind(this);
    this.showPopover = this.showPopover.bind(this);
  }

  state = {
    showing: false
  };

  getOverlayTriggerEventProps() {
    let events = {};
    if (typeof this.props.triggerEvent === 'string') {
      events[this.props.triggerEvent] = this.togglePopover;
    } else {
      events = this.props.triggerEvent.reduce((acc, val) => {
        if (val === 'onHover') {
          acc.onMouseEnter = this.showPopover;
          acc.onMouseLeave = this.hidePopover;
        } else {
          acc[val] = this.togglePopover;
        }
        return acc;
      }, {});
    }

    return events;
  }

  togglePopover() {
    this.setState({ showing: !this.state.showing });
  }

  hidePopover() {
    this.setState({ showing: false });
  }

  showPopover() {
    this.setState({ showing: true });
  }

  renderTrigger() {
    const classes = cx('button button--icon-only avatar__wrapper', {
      'is-active': this.state.showing
    });

    const overlayTriggerEvent = this.getOverlayTriggerEventProps();

    return (
      <button className={classes} {...overlayTriggerEvent}>
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

  render() {
    const onHide = () => {
      this.setState({ showing: false });
    };

    const popover = (
      <Popover id={this.props.email} className={this.props.popoverClass}>
        {this.props.children}
      </Popover>
    );

    return (
      <span className="avatar__popover">
        {this.renderTrigger()}
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
}

AvatarWithPopover.defaultProps = {
  overlayPosition: 'bottom',
  triggerEvent: ['onHover', 'onClick'],
  isHighlighted: false,
  caret: false,
  popoverClass: '',
  children: []
};

AvatarWithPopover.propTypes = {
  triggerEvent: PropTypes.oneOfType([
    PropTypes.oneOf(['onHover', 'onClick']),
    PropTypes.arrayOf(PropTypes.oneOf(['onHover', 'onClick']))
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
