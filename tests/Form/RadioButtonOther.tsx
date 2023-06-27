import { React, shallow, mount } from "../setup";
import RadioButtonOther from "../../lib/Form/RadioButton/Other";
import RadioButtonInput from "../../lib/Form/RadioButton/Input";
import Label from "../../lib/Form/Label";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("RadioButtonOther", () => {
  // @ts-expect-error
  let Other;
  const onChangeHandler = () => "onChangeHandler";

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    Other = mount(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        onChangeHandler={onChangeHandler}
        onTextChangeHandler={() => {}}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("has a radio button input", () => {
    // @ts-expect-error TS(2339): Property 'find' does not exist on type '(this: any... Remove this comment to see the full error message
    let Input = Other.find(RadioButtonInput);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Input.prop("name")).toEqual("foo");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Input.prop("id")).toEqual("4");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Input.prop("onChangeHandler")).toEqual(onChangeHandler);

    // @ts-expect-error TS(2339): Property 'setProps' does not exist on type '(this:... Remove this comment to see the full error message
    Other.setProps({ checked: true });

    // @ts-expect-error TS(2339): Property 'find' does not exist on type '(this: any... Remove this comment to see the full error message
    Input = Other.find(RadioButtonInput);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Input.prop("name")).toEqual("foo");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Input.prop("id")).toEqual("4");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Input.prop("onChangeHandler")).toEqual(onChangeHandler);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("has a label", () => {
    // @ts-expect-error TS(2339): Property 'find' does not exist on type '(this: any... Remove this comment to see the full error message
    const label = Other.find(Label);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(label.prop("label")).toEqual("Something else");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(label.prop("id")).toEqual("4");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("does not render the label", () => {
    // @ts-expect-error TS(2339): Property 'setProps' does not exist on type '(this:... Remove this comment to see the full error message
    Other.setProps({ checked: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find(Label)).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("has a text input, if it is checked", () => {
    // @ts-expect-error TS(2339): Property 'setProps' does not exist on type '(this:... Remove this comment to see the full error message
    Other.setProps({ checked: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find('input[type="text"]')).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("hides the user input field if it is not checked", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find('input[type="text"]')).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('uses the "value" prop to set the initial value of the user input field', () => {
    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        checked
        value="the initial value"
        onChangeHandler={() => {}}
        onTextChangeHandler={() => {}}
      />
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find('input[type="text"]').props().value).toEqual(
      "the initial value"
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("returns the id to the onChangeHandler when it is checked", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onChangeSpy = jest.fn();
    const e = { target: { id: 4 } };

    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        onChangeHandler={onChangeSpy}
        onTextChangeHandler={() => {}}
      />
    );

    Other.find(RadioButtonInput).prop("onChangeHandler")(e);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).toHaveBeenCalledWith(e);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("returns the user input value to the onTextChange handler", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onTextChangeSpy = jest.fn();

    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        checked
        onTextChangeHandler={onTextChangeSpy}
        onChangeHandler={() => {}}
      />
    );

    Other.find('input[type="text"]').simulate("change", {
      target: { value: "new input" },
    });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onTextChangeSpy).toHaveBeenCalledWith({
      target: { value: "new input" },
    });
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("focuses the input element", () => {
    const mountedWrapper = mount(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        onTextChangeHandler={() => {}}
        onChangeHandler={() => {}}
      />
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(mountedWrapper.instance().input).not.toEqual(document.activeElement);
    mountedWrapper.setProps({ checked: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(mountedWrapper.instance().input).toEqual(document.activeElement);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a span instead of input when disabled", () => {
    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        checked
        onTextChangeHandler={() => {}}
        onChangeHandler={() => {}}
      />
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find('input[type="text"]')).toHaveLength(1);
    Other.setProps({ disabled: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find('input[type="text"]')).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(Other.find("span")).toHaveLength(1);
  });
});
