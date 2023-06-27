import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Event... Remove this comment to see the full error message
import { EventCodeWatcher } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("EventCodeWatcher", () => {
  let wrapper: any;
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const onKeyCodePressSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const addEventListenerSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const removeEventListenerSpy = jest.fn();
  const mockElement = {
    addEventListener: addEventListenerSpy,
    removeEventListener: removeEventListenerSpy,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <EventCodeWatcher
        eventName="click"
        onKeyCodePress={onKeyCodePressSpy}
        keyCode={30}
        element={mockElement}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding the correct event listeners when mounting", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "click",
      wrapper.instance().detectCodeTriggered
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("removing the correct event listeners when mounting", () => {
    const detectFunction = wrapper.instance().detectCodeTriggered;
    wrapper.unmount();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      detectFunction
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("triggering the onKeyCodePress prop function when the correct key is pressed", () => {
    wrapper.instance().detectCodeTriggered({ keyCode: 10 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onKeyCodePressSpy).toHaveBeenCalledTimes(0);
    wrapper.instance().detectCodeTriggered({ keyCode: 30 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onKeyCodePressSpy).toHaveBeenCalled();
  });
});
