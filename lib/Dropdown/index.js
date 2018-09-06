import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DropdownAction from './DropdownAction';
import DropdownActionGroup from './DropdownActionGroup';
import DropdownContent from './DropdownContent';
import DropdownTrigger from './DropdownTrigger';
import BoundaryClickWatcher from '../BoundaryClickWatcher';

export const GATHER_UI_DROPDOWN = 'GATHER_UI_DROPDOWN';

class Dropdown extends Component {
  static Action = DropdownAction;
  static ActionGroup = DropdownActionGroup;
  static Content = DropdownContent;
  static Trigger = DropdownTrigger;

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    onToggle: PropTypes.func,
    className: PropTypes.string,
    ignoreClass: PropTypes.string
  };

  static defaultProps = {
    onToggle: () => {},
    className: '',
    ignoreClass: null
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
        toggleShowContent: this.toggleShowContent
      }
    };
  }

  setShowContent = show => {
    this.dispatchToggle(show);
    this.setState({
      showContent: show
    });
  };

  dispatchToggle = contentWillShow => {
    const { id, onToggle } = this.props;
    const type = contentWillShow ? 'ACTIVE' : 'UNACTIVE';

    onToggle({
      type,
      payload: { id }
    });
  };

  toggleShowContent = () => {
    this.dispatchToggle(!this.state.showContent);
    this.setState({
      showContent: !this.state.showContent
    });
  };

  render() {
    const classNames = cx(`dropdown-gc ${this.props.className}`, {
      'is-active': this.state.showContent
    });

    return (
      <BoundaryClickWatcher
        className={classNames}
        outsideClickHandler={() => this.setShowContent(false)}
        ignoreClass={this.props.ignoreClass}
      >
        {this.props.children}
      </BoundaryClickWatcher>
    );
  }
}

export default Dropdown;
