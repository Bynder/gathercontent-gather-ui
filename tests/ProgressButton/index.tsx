import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Butto... Remove this comment to see the full error message
import { Button, ProgressButton } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("ProgressButton", () => {
  // @ts-expect-error
  let wrapper;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <ProgressButton clickHandler={() => {}}>Botão</ProgressButton>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should render a button component", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("clicking the button should set the state and render the icon", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state().showSpinner).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".progress-button__icon")).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().clickHandler();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state().showSpinner).toBe(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".progress-button__icon")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("if useShowSpinnerProp is true the show spinner prop should detirmine the spinning state", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ useShowSpinnerProp: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state().showSpinner).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".progress-button__icon")).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ showSpinner: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state().showSpinner).toBe(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".progress-button__icon")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the showSpinner state back to false if autoSpinner is true", async () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const clickHandlerSpy = jest.fn();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ clickHandler: clickHandlerSpy, autoSpinner: true });
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    await wrapper.instance().clickHandler();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state().showSpinner).toBe(false);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets a disabled state", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ disabled: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).prop("disabled")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays text when spinning", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({
      spinnerText: "i get motion sick",
      useShowSpinnerProp: true,
      showSpinner: true,
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".progress-button__spinner-text").text()).toEqual(
      "i get motion sick"
    );
  });
});
