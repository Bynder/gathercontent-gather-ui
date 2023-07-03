import { Button } from "lib";
import { React, mount } from "../setup";

describe("Button", () => {
  let wrapper: any;
  let button: any;
  let clickHandlerSpy: any;

  beforeEach(() => {
    clickHandlerSpy = jest.fn();
    wrapper = mount(<Button clickHandler={clickHandlerSpy}>Botão</Button>);
    button = wrapper.find("button");
  });

  test("should render text passed on children", () => {
    expect(button.prop("children")).toEqual("Botão");
  });

  test("should render a primary button by default", () => {
    expect(button.prop("className")).toContain("button  button--primary");
  });

  test("should not be a submit button by default", () => {
    expect(button.prop("type")).toEqual("button");
  });

  test("can be a submit button", () => {
    wrapper.setProps({
      isSubmit: true,
    });
    wrapper.update();
    button = wrapper.find("button");

    expect(button.prop("type")).toEqual("submit");
  });

  test("should render a button with multiple type classes", () => {
    wrapper.setProps({
      types: ["clear", "collapsed"],
    });
    wrapper.update();
    button = wrapper.find("button");

    expect(button.prop("className")).toContain(
      "button  button--clear button--collapsed"
    );
  });

  test("should render custom classes", () => {
    wrapper.setProps({
      className: "custom-class",
    });
    wrapper.update();
    button = wrapper.find("button");

    expect(button.prop("className")).toContain("custom-class");
  });

  test("should call props.clickHandler when clicked", () => {
    wrapper.simulate("click", { target: { value: "foo" } });

    expect(clickHandlerSpy).toHaveBeenCalledTimes(1);

    expect(clickHandlerSpy.mock.calls[0][0].target.value).toEqual("foo");
  });

  test("should set state.disabled to true when clicked if props.disableOnClick is true", () => {
    wrapper.setProps({
      disableOnClick: true,
    });
    wrapper.simulate("click");

    expect(wrapper.state("disabled")).toEqual(true);
  });

  test("should not set state.disabled to true when clicked if props.disableOnClick is false", () => {
    wrapper.simulate("click");

    expect(wrapper.state("disabled")).toEqual(false);
  });

  test("it can pass an id prop down to button attribute", () => {
    wrapper.setProps({ id: "my-id" });
    button = wrapper.find("button");

    expect(button.prop("id")).toEqual("my-id");
  });
});
