import { useEffect, useState } from 'react';
import uuid from 'uuid/v1';

function ShortcutTrigger({
  shortcutKey,
  onShortcutTrigger,
  withCtrlKey,
  withMetaKey,
  withAltKey,
  withShiftKey
}) {
  const [shouldExecuteEvent, setShouldExecuteEvent] = useState(null);

  const doesKeyMeetRequirements = (keyIsRequired, keyValue) =>
    keyIsRequired ? keyValue : !keyValue;

  const checkCoreKeyRequirements = event =>
    doesKeyMeetRequirements(withCtrlKey, event.ctrlKey) &&
    doesKeyMeetRequirements(withMetaKey, event.metaKey) &&
    doesKeyMeetRequirements(withAltKey, event.altKey) &&
    doesKeyMeetRequirements(withShiftKey, event.shiftKey);

  const shortcutHasBeenExecuted = event =>
    event.key === shortcutKey ? checkCoreKeyRequirements(event) : false;

  const onKeyDown = event => {
    if (event.target.type === 'text') {
      return event;
    }

    if (shortcutHasBeenExecuted(event) && !event.repeat) {
      setShouldExecuteEvent({
        id: uuid(),
        event
      });
    }

    return event;
  };

  useEffect(() => {
    if (shouldExecuteEvent) {
      onShortcutTrigger(shouldExecuteEvent.event);
    }
  }, [shouldExecuteEvent?.id]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return null;
}

ShortcutTrigger.defaultProps = {
  withCtrlKey: false,
  withMetaKey: false,
  withShiftKey: false,
  withAltKey: false
};

export default ShortcutTrigger;
