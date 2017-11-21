import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from '../PopoverWrapper';
import { Avatar, Button, Icon } from '../';

/**
 * @usage
 *
 * <AvatarWithDropdown email="poppycox@gmail.com" name="Poppy Cox" pillboxText="Assigned" />
 */
class AvatarWithDropdown extends Component {
  state = {
    show: false
  };

  render() {
    const togglePopover = () => this.setState({ show: !this.state.show });

    const onHide = () => this.setState({ show: false });

    return (
      <div className="avatar_dropdown">
        <Button types={['icon-only']} clickHandler={togglePopover}>
          <span
            className="avatar_dropdown__target"
            ref={target => {
              this.target = target;
            }}
          >
            <Avatar {...this.props} className="avatar--with-toggle" />
          </span>
          <Icon name="caret" className="avatar_dropdown__caret" />
        </Button>
        <Overlay
          show={this.state.show}
          target={this.target}
          placement={this.props.placement}
          onHide={onHide}
          rootClose
        >
          <Popover id={this.props.email} className="avatar_dropdown__popover popover-dropdown">
            {this.props.children}
          </Popover>
        </Overlay>
      </div>
    );
  }
}

AvatarWithDropdown.defaultProps = {
  placement: 'bottom',
  isHighlighted: false
};

AvatarWithDropdown.propTypes = {
  placement: PropTypes.string,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired
};

export default AvatarWithDropdown;
