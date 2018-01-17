import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import TabItem from './TabsItem';
import TabButton from './TabsButton';
import TabOptions from './TabsOptions';

export const GATHER_UI_TABS = 'GATHER_UI_TABS';

class Tabs extends Component {
  static Item = TabItem;
  static Button = TabButton;
  static Options = TabOptions;

  static childContextTypes = {
    [GATHER_UI_TABS]: PropTypes.object.isRequired
  };

  static propTypes = {
    onTabChange: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    activeTabId: PropTypes.string,
    editable: PropTypes.bool
  };

  static defaultProps = {
    activeTabId: null,
    editable: false
  };

  constructor(props) {
    super();
    this.state = {
      activeTabId: props.activeTabId
    };
  }

  getChildContext() {
    return {
      [GATHER_UI_TABS]: {
        activeTabId: this.state.activeTabId || this.props.activeTabId,
        setActiveTab: this.setActiveTab
      }
    };
  }

  setActiveTab = id => {
    if (this.state.activeTabId === id) {
      return;
    }

    this.setState(
      {
        activeTabId: id
      },
      () => this.props.onTabChange(id)
    );
  };

  render() {
    const className = cx('tabs', {
      'tabs--editable': this.props.editable
    });

    return <div className={className}>{this.props.children}</div>;
  }
}

export default Tabs;
