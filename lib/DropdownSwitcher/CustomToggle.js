import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomToggle extends Component {
  handleClick = e => {
    this.props.onClick(e);
  };

  handleEditKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.onClick(e);
    }
  };

  render() {
    return (
      <div
        onClick={this.handleClick}
        onKeyUp={this.handleKeyPress}
        role="button"
        tabIndex={0}
        className="dropdown-switcher__toggle"
      >
        {this.props.children}
      </div>
    );
  }
}

CustomToggle.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]).isRequired
};

CustomToggle.defaultProps = {
  onClick: () => {}
};

export default CustomToggle;
