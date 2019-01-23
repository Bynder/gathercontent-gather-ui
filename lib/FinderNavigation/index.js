import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FinderGroup from './FinderGroup';
import FinderItem from './FinderItem';

class FinderNavigation extends Component {
  static Group = FinderGroup;
  static Item = FinderItem;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    return (
      <div className={`finder ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default FinderNavigation;
