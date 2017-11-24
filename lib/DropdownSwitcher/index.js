import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import Overlay from 'react-bootstrap/lib/Overlay';
import Popover from 'react-bootstrap/lib/Popover';
import Icon from '../Icon';

class DropdownSwitcher extends Component {
  state = {
    show: false
  };

  popover() {
    const togglePopover = () => this.setState({ show: !this.state.show });

    const onHide = () => {
      this.setState({ show: false });
    };

    const classes = cx('button button--icon-only project-switcher__name', {
      'is-active': this.state.show
    });

    return (
      <div className="dropdown-switcher">
        <button className={classes} onClick={togglePopover} ref={(target) => { this.target = target; }}>
          <h3 className="dropdown-switcher__title">
            {this.props.title}
            <span className="dropdown-switcher__caret">
              <Icon name="caret" />
            </span>
          </h3>
        </button>
        <Overlay
          show={this.state.show}
          onHide={onHide}
          target={this.target}
          placement="bottom"
          rootClose
        >
          <Popover id={this.props.id} className="popover-dropdown">
            {this.props.children}
          </Popover>
        </Overlay>
      </div>
    );
  }

  dropdown() {
    return (
      <Dropdown className="dropdown-switcher" id={this.props.id}>
        <div bsRole="toggle">
          <h3 className="dropdown-switcher__title">{this.props.title}</h3>
          <i className="fa fa-caret-down dropdown-switcher__arrow" />
        </div>
        {this.props.menu}
      </Dropdown>
    );
  }

  render() {
    if (this.props.menu) {
      return this.dropdown();
    }

    return this.popover();
  }
}

DropdownSwitcher.propTypes = {
  title: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  menu: React.PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

DropdownSwitcher.defaultProps = {
  title: '',
  id: '',
  menu: '',
  children: []
};

export default DropdownSwitcher;
