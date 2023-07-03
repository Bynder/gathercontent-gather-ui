import { React, shallow } from "../setup";
import { EventCodeWatcher } from "lib";

describe("EventCodeWatcher", () => {
  let wrapper: any;

  const onKeyCodePressSpy = jest.fn();

  const addEventListenerSpy = jest.fn();

  const removeEventListenerSpy = jest.fn();
  const mockElement = {
    addEventListener: addEventListenerSpy,
    removeEventListener: removeEventListenerSpy,
  };

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

  test("adding the correct event listeners when mounting", () => {
    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "click",
      wrapper.instance().detectCodeTriggered
    );
  });

  test("removing the correct event listeners when mounting", () => {
    const detectFunction = wrapper.instance().detectCodeTriggered;
    wrapper.unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "click",
      detectFunction
    );
  });

  test("triggering the onKeyCodePress prop function when the correct key is pressed", () => {
    wrapper.instance().detectCodeTriggered({ keyCode: 10 });

    expect(onKeyCodePressSpy).toHaveBeenCalledTimes(0);
    wrapper.instance().detectCodeTriggered({ keyCode: 30 });

    expect(onKeyCodePressSpy).toHaveBeenCalled();
  });
});
