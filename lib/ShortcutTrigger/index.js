import { useEffect } from 'react';

function ShortcutTrigger({ shortcutKey, onShortcutTrigger, withCtrlKey, withMetaKey, withAltKey, withShiftKey }) {

  const doesKeyMeetRequirements = (keyIsRequired, keyValue) => keyIsRequired ? keyValue : !keyValue;

  const checkCoreKeyRequirements = (event) => (
    doesKeyMeetRequirements(withCtrlKey, event.ctrlKey) &&
    doesKeyMeetRequirements(withMetaKey, event.metaKey) &&
    doesKeyMeetRequirements(withAltKey, event.altKey) &&
    doesKeyMeetRequirements(withShiftKey, event.shiftKey)
  );

  const shortcutHasBeenExecuted = (event) => event.key === shortcutKey ? checkCoreKeyRequirements(event) : false;

  const onKeyDown = (event) => {
    if (event.target.type  === 'text') {
      return event;
    }

    return shortcutHasBeenExecuted(event) && !event.repeat
      ? onShortcutTrigger(event)
      : event;
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, []);

  return null
};

ShortcutTrigger.defaultProps = {
  withCtrlKey: false,
  withMetaKey: false,
  withShiftKey: false,
  withAltKey: false
};

export default ShortcutTrigger;
