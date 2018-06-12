import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TableHeadingTitle extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.sortHandler(this.props.column);
  }

  render() {
    return (
      <button
        className={`table-heading__title ${this.props.className}`}
        onClick={this.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

TableHeadingTitle.propTypes = {
  column: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  sortHandler: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default TableHeadingTitle;
