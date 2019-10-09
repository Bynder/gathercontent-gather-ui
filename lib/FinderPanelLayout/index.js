import React, { Component } from 'react';
import { node, string } from 'prop-types';
import FinderPanelLayoutLeft from './FinderPanelLayoutLeft';
import FinderPanelLayoutRight from './FinderPanelLayoutRight';
import FinderPanelLayoutHeader from './FinderPanelLayoutHeader';

class FinderPanelLayout extends Component {
  static Left = FinderPanelLayoutLeft;

  static Right = FinderPanelLayoutRight;

  static Header = FinderPanelLayoutHeader;

  render() {
    return (
      <div className={`finder-panel-layout ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

FinderPanelLayout.propTypes = {
  children: node.isRequired,
  className: string
};

FinderPanelLayout.defaultProps = {
  className: ''
};

export default FinderPanelLayout;
