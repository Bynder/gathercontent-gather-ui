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
class ProjectSwitcher extends Component {
  state = {
    show: false
  };

  render() {
    const togglePopover = () => this.setState({ show: !this.state.show });

    const onHide = () => {
      this.setState({ show: false });
    };

    const classes = cx('button button--icon-only project-switcher__name', {
      'is-active': this.state.show
    });

    return (
      <div className="project-switcher">
        <button
          className={classes}
          onClick={togglePopover}
        >
          <h3>
            {this.props.name}
            <span className="project-switcher__caret">
              <Icon name="caret" />
            </span>
          </h3>
        </button>
        <Overlay
          show={this.state.show}
          onHide={onHide}
          target={this}
          placement={this.props.overlayPosition}
          rootClose
        >
          <Popover id="project-switcher" className="popover-dropdown">
            {this.props.children}
          </Popover>
        </Overlay>
      </div>
    );
  }
}

ProjectSwitcher.defaultProps = {
  overlayPosition: 'bottom',
  popoverClass: '',
  name: '',
  children: []
};

ProjectSwitcher.propTypes = {
  overlayPosition: PropTypes.string,
  popoverClass: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

export default ProjectSwitcher;
