import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FinderGroup from './FinderGroup';
import FinderItem from './FinderItem';
import FinderItemContent from './FinderItemContent';
import FinderItemSettings from './FinderItemSettings';

class FinderNavigation extends Component {
  static Group = FinderGroup;

  static Item = FinderItem;

  static ItemContent = FinderItemContent;

  static ItemSettings = FinderItemSettings;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    return (
      // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      <div className={`finder ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default FinderNavigation;
