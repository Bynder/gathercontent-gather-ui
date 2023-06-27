import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'FormI... Remove this comment to see the full error message
import { FormInput } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("FormInput", () => {
  let wrapper: any;
  let onChangeSpy: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onChangeSpy = jest.fn();
    wrapper = shallow(
      <FormInput
        onInputChange={onChangeSpy}
        value="test value"
        placeholder="test placeholder"
        className="test-class"
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders an input", () => {
    const input = wrapper.find("input");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.props()).toEqual({
      type: "text",
      className: "form__input test-class",
      value: "test value",
      placeholder: "test placeholder",
      onChange: wrapper.instance().handleOnChange,
      autoFocus: false,
      "aria-invalid": false,
      disabled: false,
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the initial value state to props.value", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("value")).toEqual("test value");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the current value to the targets value", () => {
    wrapper.instance().handleOnChange({ target: { value: "value 1" } });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("value")).toEqual("value 1");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).toHaveBeenCalledWith("value 1");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the correct className", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("input").hasClass("test-class")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds the has-error class and displays the error message", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("input").hasClass("form__input--has-error")).toEqual(
      false
    );
    wrapper.setProps({ hasError: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("input").hasClass("form__input--has-error")).toEqual(
      true
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".form-input__error-message")).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("input").hasClass("form__input--display-error")
    ).toEqual(false);
    wrapper.setProps({ errorMessage: "oooooops" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("input").hasClass("form__input--display-error")
    ).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".form-input__error-message")).toHaveLength(1);
  });
});
