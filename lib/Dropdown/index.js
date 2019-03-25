import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DropdownAction from './DropdownAction';
import DropdownActionGroup from './DropdownActionGroup';
import DropdownContent from './DropdownContent';
import DropdownSection from './DropdownSection';
import DropdownTrigger from './DropdownTrigger';
import BoundaryClickWatcher from '../BoundaryClickWatcher';
import DropdownHeader from './DropdownHeader';
import DropdownFooter from './DropdownFooter';

export const GATHER_UI_DROPDOWN = 'GATHER_UI_DROPDOWN';

class Dropdown extends Component {
  static Action = DropdownAction;

  static ActionGroup = DropdownActionGroup;

  static Content = DropdownContent;

  static Header = DropdownHeader;

  static Footer = DropdownFooter;

  static Section = DropdownSection;

  static Trigger = DropdownTrigger;

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    onToggle: PropTypes.func,
    onHide: PropTypes.func,
    className: PropTypes.string,
    ignoreClass: PropTypes.string,
    autoPosition: PropTypes.bool,
    persistShow: PropTypes.bool
  };

  static defaultProps = {
    onToggle: () => {},
    onHide: () => {},
    className: '',
    ignoreClass: null,
    autoPosition: false,
    persistShow: false
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
        setShowContent: this.setShowContent,
        autoPosition: this.props.autoPosition,
        bounds: this.state.bounds
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
    const { id, onToggle, persistShow } = this.props;
    const type = contentWillShow || persistShow ? 'ACTIVE' : 'UNACTIVE';

    onToggle({
      type,
      payload: { id }
    });
  };

  toggleShowContent = (bounds = null) => {
    this.dispatchToggle(!this.state.showContent);

    this.setState(prevState => ({
      showContent: this.props.persistShow ? true : !prevState.showContent
    }));

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
        outsideClickHandler={() => {
          this.setShowContent(false);
          this.props.onHide();
        }}
        ignoreClass={this.props.ignoreClass}
      >
        {this.props.children}
      </BoundaryClickWatcher>
    );
  }
}

export default Dropdown;
