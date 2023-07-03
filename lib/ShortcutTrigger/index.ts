import { useEffect, useState } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import uuid from "uuid/v1";

export function ShortcutTrigger({
  shortcutKey,
  onShortcutTrigger,
  withCtrlKey,
  withMetaKey,
  withAltKey,
  withShiftKey,
}: any) {
  const [shouldExecuteEvent, setShouldExecuteEvent] = useState(null);

  const doesKeyMeetRequirements = (keyIsRequired: any, keyValue: any) =>
    keyIsRequired ? keyValue : !keyValue;

  const checkCoreKeyRequirements = (event: any) =>
    doesKeyMeetRequirements(withCtrlKey, event.ctrlKey) &&
    doesKeyMeetRequirements(withMetaKey, event.metaKey) &&
    doesKeyMeetRequirements(withAltKey, event.altKey) &&
    doesKeyMeetRequirements(withShiftKey, event.shiftKey);

  const shortcutHasBeenExecuted = (event: any) =>
    event.key === shortcutKey ? checkCoreKeyRequirements(event) : false;

  const onKeyDown = (event: any) => {
    if (event.target.type === "text") {
      return event;
    }

    if (shortcutHasBeenExecuted(event) && !event.repeat) {
      setShouldExecuteEvent({
        // @ts-expect-error TS(2345): Argument of type '{ id: any; event: any; }' is not... Remove this comment to see the full error message
        id: uuid(),
        event,
      });
    }

    return event;
  };

  useEffect(() => {
    if (shouldExecuteEvent) {
      // @ts-expect-error TS(2339): Property 'event' does not exist on type 'never'.
      onShortcutTrigger(shouldExecuteEvent.event);
    }
    // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
  }, [shouldExecuteEvent?.id]);

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}

ShortcutTrigger.defaultProps = {
  withCtrlKey: false,
  withMetaKey: false,
  withShiftKey: false,
  withAltKey: false,
};

export default ShortcutTrigger;
