import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EventCodeWatcher extends PureComponent {
  componentDidMount() {
    if (this.props.element) {
      return this.props.element.addEventListener(
        this.props.eventName,
        this.detectCodeTriggered
      );
    }

    return document.addEventListener(
      this.props.eventName,
      this.detectCodeTriggered
    );
  }

  componentWillUnmount() {
    if (this.props.element) {
      return this.props.element.removeEventListener(
        this.props.eventName,
        this.detectCodeTriggered
      );
    }

    return document.removeEventListener(
      this.props.eventName,
      this.detectCodeTriggered
    );
  }

  detectCodeTriggered = event => {
    if (event.keyCode === this.props.keyCode) {
      if (this.props.preventDefault) {
        event.preventDefault();
      }
      this.props.onKeyCodePress();
    }
  };

  render() {
    return null;
  }
}

export default EventCodeWatcher;
