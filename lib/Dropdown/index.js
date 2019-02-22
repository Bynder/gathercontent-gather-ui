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
    ignoreClass: PropTypes.string,
    autoPosition: PropTypes.bool,
    show: PropTypes.bool
  };

  static defaultProps = {
    onToggle: () => {},
    className: '',
    ignoreClass: null,
    autoPosition: false,
    show: false
  };

  static childContextTypes = {
    [GATHER_UI_DROPDOWN]: PropTypes.shape().isRequired
  };

  state = {
    showContent: false,
    bounds: {
      top: -9999
    }
  };

  getChildContext() {
    return {
      [GATHER_UI_DROPDOWN]: {
        showContent: this.state.showContent,
        toggleShowContent: this.toggleShowContent,
        autoPosition: this.props.autoPosition,
        bounds: this.state.bounds
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show && !this.props.show) {
      this.setShowContent(false);
    }
  }

  setShowContent = show => {
    this.dispatchToggle(show);
    this.setState({
      showContent: show
    });
  };

  dispatchToggle = contentWillShow => {
    const { id, onToggle, show } = this.props;
    const type = contentWillShow || show ? 'ACTIVE' : 'UNACTIVE';

    onToggle({
      type,
      payload: { id }
    });
  };

  toggleShowContent = (bounds = null) => {
    this.dispatchToggle(!this.state.showContent);
    this.setState({
      showContent: !this.state.showContent
    });
    if (bounds) {
      this.setState({
        bounds: {
          top: bounds.top,
          left: bounds.left,
          width: bounds.width
        }
      });
    }
  };

  render() {
    const classNames = cx(`dropdown-gc ${this.props.className}`, {
      'is-active': this.state.showContent,
      'auto-top': this.props.autoPosition
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
