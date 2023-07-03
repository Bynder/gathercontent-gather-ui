import { InputWithButton, Button } from "lib";
import { React, shallow } from "../setup";

describe("InputWithButton", () => {
  let wrapper: any;

  let onClickSpy = jest.fn();
  let props: any;

  beforeEach(() => {
    onClickSpy = jest.fn();

    props = {
      value: "A value",
      buttonText: "Button Text",
      onClick: onClickSpy,
      id: "123",
    };

    wrapper = shallow(<InputWithButton {...props} />);
  });

  test("passes the value prop to the input", () => {
    expect(wrapper.find("input").prop("value")).toEqual(props.value);
  });

  test("passes button text prop to button", () => {
    expect(wrapper.find(Button).prop("children")).toEqual(props.buttonText);
  });

  test("calls onClick when the button is pressed", () => {
    wrapper.find(Button).simulate("click");

    expect(onClickSpy).toBeCalled();
  });

  test("adds a padding-small modifier", () => {
    expect(wrapper.hasClass("input-with-button--padding-small")).toBe(false);
    wrapper.setProps({ paddingSmall: true });

    expect(wrapper.hasClass("input-with-button--padding-small")).toBe(true);
  });
});
