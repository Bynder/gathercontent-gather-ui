import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabItem from './TabsItem';
import TabButton from './TabsButton';

export const GATHER_UI_TABS = 'GATHER_UI_TABS';

class Tabs extends Component {
  static Item = TabItem;
  static Button = TabButton;

  static childContextTypes = {
    [GATHER_UI_TABS]: PropTypes.object.isRequired
  };

  static propTypes = {
    onTabChange: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    activeTabId: PropTypes.string
  };

  static defaultProps = {
    activeTabId: ''
  };

  state = {
    activeTabId: null
  };

  getChildContext() {
    return {
      [GATHER_UI_TABS]: {
        activeTabId: this.state.activeTabId || this.props.activeTabId,
        setActiveTab: this.setActiveTab
      }
    };
  }

  setActiveTab = id =>
    this.setState({ activeTabId: id }, () => this.props.onTabChange(id));

  render() {
    return <div className="tabs">{this.props.children}</div>;
  }
}

export default Tabs;
