import { React, shallow } from "../setup";
import {
  // @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Confi... Remove this comment to see the full error message
  ConfirmationOverlay,
  ButtonTertiary,
  ButtonPrimaryDanger,
} from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Confirmation Overlay", () => {
  let wrapper: any;

  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const cancelSpy = jest.fn();
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  const confirmSpy = jest.fn();

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <ConfirmationOverlay
        cancel={cancelSpy}
        confirm={confirmSpy}
        confirmationText="dooo ittttt"
        show
      />
    );
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {
    cancelSpy.mockReset();
    confirmSpy.mockReset();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a show modifier", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("confirmation-overlay--show")).toBe(true);
    wrapper.setProps({ show: false });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("confirmation-overlay--show")).toBe(false);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders two Buttons", () => {
    const cancelButton = wrapper.find(ButtonTertiary);
    const submitButton = wrapper.find(ButtonPrimaryDanger);

    cancelButton.prop("onClick")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(cancelSpy).toHaveBeenCalledTimes(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(submitButton.render().text()).toEqual("dooo ittttt");
  });
});
