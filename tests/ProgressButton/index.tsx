import { React, shallow } from "../setup";
import { Button, ProgressButton } from "../../lib";

describe("ProgressButton", () => {
  // @ts-expect-error
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      // @ts-expect-error
      <ProgressButton clickHandler={() => {}}>Botão</ProgressButton>
    );
  });

  test("should render a button component", () => {
    // @ts-expect-error
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  test("clicking the button should set the state and render the icon", () => {
    // @ts-expect-error
    expect(wrapper.state().showSpinner).toBe(false);
    // @ts-expect-error
    expect(wrapper.find(".progress-button__icon")).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().clickHandler();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.update();
    // @ts-expect-error
    expect(wrapper.state().showSpinner).toBe(true);
    // @ts-expect-error
    expect(wrapper.find(".progress-button__icon")).toHaveLength(1);
  });

  test("if useShowSpinnerProp is true the show spinner prop should detirmine the spinning state", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ useShowSpinnerProp: true });
    // @ts-expect-error
    expect(wrapper.state().showSpinner).toBe(false);
    // @ts-expect-error
    expect(wrapper.find(".progress-button__icon")).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ showSpinner: true });
    // @ts-expect-error
    expect(wrapper.state().showSpinner).toBe(false);
    // @ts-expect-error
    expect(wrapper.find(".progress-button__icon")).toHaveLength(1);
  });

  test("sets the showSpinner state back to false if autoSpinner is true", async () => {
    const clickHandlerSpy = jest.fn();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ clickHandler: clickHandlerSpy, autoSpinner: true });
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    await wrapper.instance().clickHandler();
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.update();
    // @ts-expect-error
    expect(wrapper.state().showSpinner).toBe(false);
  });

  test("sets a disabled state", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ disabled: true });
    // @ts-expect-error
    expect(wrapper.find(Button).prop("disabled")).toEqual(true);
  });

  test("displays text when spinning", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({
      spinnerText: "i get motion sick",
      useShowSpinnerProp: true,
      showSpinner: true,
    });
    // @ts-expect-error
    expect(wrapper.find(".progress-button__spinner-text").text()).toEqual(
      "i get motion sick"
    );
  });
});
