import { React, mount } from "../setup";
import { ExpandingTextArea } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("ExpandingTextArea", () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  jest.useFakeTimers();
  let wrapper: any;
  let handleOnChangeSpy: any;
  let handleOnFocusSpy: any;
  let onRowCountChangeSpy;
  let handleOnBlurSpy: any;
  let style;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    style = {
      lineHeight: "20px",
      padding: "10px 0 10px",
    };
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    handleOnChangeSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    handleOnFocusSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onRowCountChangeSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    handleOnBlurSpy = jest.fn();
    wrapper = mount(
      <ExpandingTextArea
        style={style}
        placeholder="Placeholder..."
        handleOnChange={handleOnChangeSpy}
        handleOnFocus={handleOnFocusSpy}
        handleOnBlur={handleOnBlurSpy}
        onRowCountChange={onRowCountChangeSpy}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the input value as the value prop", () => {
    wrapper.setProps({ value: "New Value" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual(wrapper.prop("value"));
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls the handleOnChange prop on change", () => {
    wrapper.simulate("change", { target: { value: "Changed value" } });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(handleOnChangeSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls a prop function when focus and blur", () => {
    wrapper.simulate("focus", {});
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(handleOnFocusSpy).toHaveBeenCalledTimes(1);

    wrapper.simulate("blur", {});
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(handleOnBlurSpy).toHaveBeenCalledTimes(1);
  });
});
