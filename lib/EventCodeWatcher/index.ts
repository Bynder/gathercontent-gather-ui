import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EventCodeWatcher extends PureComponent {
  static propTypes = {
    eventName: PropTypes.string.isRequired,
    onKeyCodePress: PropTypes.func.isRequired,
    keyCode: PropTypes.number.isRequired,
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    element: PropTypes.shape(),
    preventDefault: PropTypes.bool
  };

  static defaultProps = {
    element: null,
    preventDefault: false
  };

  componentDidMount() {
    // @ts-expect-error TS(2339): Property 'element' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (this.props.element) {
      // @ts-expect-error TS(2339): Property 'element' does not exist on type 'Readonl... Remove this comment to see the full error message
      return this.props.element.addEventListener(
        // @ts-expect-error TS(2339): Property 'eventName' does not exist on type 'Reado... Remove this comment to see the full error message
        this.props.eventName,
        this.detectCodeTriggered
      );
    }

    return document.addEventListener(
      // @ts-expect-error TS(2339): Property 'eventName' does not exist on type 'Reado... Remove this comment to see the full error message
      this.props.eventName,
      this.detectCodeTriggered
    );
  }

  componentWillUnmount() {
    // @ts-expect-error TS(2339): Property 'element' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (this.props.element) {
      // @ts-expect-error TS(2339): Property 'element' does not exist on type 'Readonl... Remove this comment to see the full error message
      return this.props.element.removeEventListener(
        // @ts-expect-error TS(2339): Property 'eventName' does not exist on type 'Reado... Remove this comment to see the full error message
        this.props.eventName,
        this.detectCodeTriggered
      );
    }

    return document.removeEventListener(
      // @ts-expect-error TS(2339): Property 'eventName' does not exist on type 'Reado... Remove this comment to see the full error message
      this.props.eventName,
      this.detectCodeTriggered
    );
  }

  detectCodeTriggered = (event: any) => {
    // @ts-expect-error TS(2339): Property 'keyCode' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (event.keyCode === this.props.keyCode) {
      // @ts-expect-error TS(2339): Property 'preventDefault' does not exist on type '... Remove this comment to see the full error message
      if (this.props.preventDefault) {
        event.preventDefault();
      }
      // @ts-expect-error TS(2339): Property 'onKeyCodePress' does not exist on type '... Remove this comment to see the full error message
      this.props.onKeyCodePress();
    }
  };

  render() {
    return null;
  }
}

export default EventCodeWatcher;
