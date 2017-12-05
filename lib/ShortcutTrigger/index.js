import { Component } from 'react';
import PropTypes from 'prop-types';

class ShortcutTrigger extends Component {
  static propTypes = {
    shortcutKey: PropTypes.string.isRequired,
    onShortcutTrigger: PropTypes.func.isRequired,
    withCtrlKey: PropTypes.bool,
    withMetaKey: PropTypes.bool,
    withShiftKey: PropTypes.bool
  };

  static defaultProps = {
    withCtrlKey: false,
    withMetaKey: false,
    withShiftKey: false
  };

  static doesKeyMeetRequirements(keyIsRequired, keyValue) {
    if (keyIsRequired) {
      return keyValue;
    }

    return !keyValue;
  }

  constructor() {
    super();
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress(event) {
    return this.shortcutHasBeenExecuted(event) && !event.repeat
      ? this.props.onShortcutTrigger()
      : event;
  }

  shortcutHasBeenExecuted(event) {
    const { shortcutKey } = this.props;

    if (event.key === shortcutKey) {
      return this.checkCoreKeyRequirements(event);
    }

    return false;
  }

  checkCoreKeyRequirements(event) {
    const { withCtrlKey, withMetaKey, withShiftKey } = this.props;

    return (
      ShortcutTrigger.doesKeyMeetRequirements(withCtrlKey, event.ctrlKey) &&
      ShortcutTrigger.doesKeyMeetRequirements(withMetaKey, event.metaKey) &&
      ShortcutTrigger.doesKeyMeetRequirements(withShiftKey, event.shiftKey)
    );
  }

  render() {
    return null;
  }
}

export default ShortcutTrigger;
