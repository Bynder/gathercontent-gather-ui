import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DropdownItem from './DropdownItem';
import DropdownItemGroup from './DropdownItemGroup';
import DropdownContent from './DropdownContent';
import DropdownTrigger from './DropdownTrigger';
import BoundaryClickWatcher from '../BoundaryClickWatcher';

export const GATHER_UI_DROPDOWN = 'GATHER_UI_DROPDOWN';

class Dropdown extends Component {
  static Item = DropdownItem;
  static ItemGroup = DropdownItemGroup;
  static Content = DropdownContent;
  static Trigger = DropdownTrigger;

  static propTypes = {
    children: PropTypes.node.isRequired
  };

  static childContextTypes = {
    [GATHER_UI_DROPDOWN]: PropTypes.shape().isRequired
  };

  state = {
    showContent: false
  };

  getChildContext() {
    return {
      [GATHER_UI_DROPDOWN]: {
        showContent: this.state.showContent,
        toggleShowContent: this.toggleShowContent,
        setShowContent: this.setShowContent
      }
    };
  }

  setShowContent = show => this.setState({ showContent: show });

  toggleShowContent = () =>
    this.setState({ showContent: !this.state.showContent });

  render() {
    const classNames = cx('dropdown-gc', {
      'is-active': this.state.showContent
    });

    return (
      <BoundaryClickWatcher
        className={classNames}
        outsideClickHandler={() => this.setShowContent(false)}
      >
        {this.props.children}
      </BoundaryClickWatcher>
    );
  }
}

export default Dropdown;
