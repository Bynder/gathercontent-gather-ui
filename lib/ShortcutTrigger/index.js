import { Component } from 'react';
import PropTypes from 'prop-types';

class ShortcutTrigger extends Component {
  static propTypes = {
    shortcutKey: PropTypes.string.isRequired,
    onShortcutTrigger: PropTypes.func.isRequired,
    withCtrlKey: PropTypes.bool,
    withMetaKey: PropTypes.bool,
    withAltKey: PropTypes.bool,
    withShiftKey: PropTypes.bool
  };

  static defaultProps = {
    withCtrlKey: false,
    withMetaKey: false,
    withShiftKey: false,
    withAltKey: false
  };

  static doesKeyMeetRequirements(keyIsRequired, keyValue) {
    if (keyIsRequired) {
      return keyValue;
    }

    return !keyValue;
  }

  constructor() {
    super();
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(event) {
    return this.shortcutHasBeenExecuted(event) && !event.repeat
      ? this.props.onShortcutTrigger(event)
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
    const { withCtrlKey, withMetaKey, withShiftKey, withAltKey } = this.props;

    return (
      ShortcutTrigger.doesKeyMeetRequirements(withCtrlKey, event.ctrlKey) &&
      ShortcutTrigger.doesKeyMeetRequirements(withMetaKey, event.metaKey) &&
      ShortcutTrigger.doesKeyMeetRequirements(withAltKey, event.altKey) &&
      ShortcutTrigger.doesKeyMeetRequirements(withShiftKey, event.shiftKey)
    );
  }

  render() {
    return null;
  }
}

export default ShortcutTrigger;
