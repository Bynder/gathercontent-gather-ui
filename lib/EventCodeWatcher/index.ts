import { PureComponent, ReactNode, useEffect } from "react";
import PropTypes from "prop-types";


interface Props {
  eventName: string;
  onKeyCodePress: () => void;
  keyCode: number;
  element?: HTMLElement;
  preventDefault?: boolean
}

export function EventCodeWatcher({ eventName, onKeyCodePress, keyCode, element, preventDefault}: Props) {
  const detectCodeTriggered = (event: any) => {
    console.log('hello im here!')
    if (event.keyCode === keyCode) {
      if (preventDefault) {
        event.preventDefault();
      }
      onKeyCodePress();
    }
  };
  
  useEffect(() => {
    if (element) {
      element.addEventListener(
        eventName,
        detectCodeTriggered
      );
    } else {
      console.log('adding listener', eventName)
      document.addEventListener(
        eventName,
        detectCodeTriggered
      );
    }
    return () => {
        if (element) {
        element.removeEventListener(
          eventName,
          detectCodeTriggered
        );
      } else {
        document.removeEventListener(
          eventName,
          detectCodeTriggered
        );
      }
    }
  });

  return null;
}

export default EventCodeWatcher;
