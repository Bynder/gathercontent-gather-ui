import { React, mount } from "../setup";
import { Guideline, Button } from "../../lib";

describe("Guideline", () => {
  let wrapper: any;

  beforeEach(() => {
    // @ts-expect-error
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      height: 120,
    }));

    wrapper = mount(
      <Guideline title="Guideline title">
        <p>Guideline content</p>
      </Guideline>
    );
  });

  test("defaults to open", () => {
    expect(wrapper.find(".guideline").hasClass("is-active")).toBe(true);
  });

  test("toggles an active class", () => {
    wrapper.find(Button).simulate("click");

    expect(wrapper.hasClass("is-active")).toBe(false);
  });

  test("sets the showContent state to true", () => {
    wrapper.find(Button).prop("clickHandler")();

    expect(wrapper.find("p")).toHaveLength(1);
  });

  test("switches the text for the show toggle", () => {
    expect(wrapper.find(Button).prop("children")).toEqual("Hide guidelines");
    wrapper.find(Button).simulate("click");

    expect(wrapper.find(Button).prop("children")).toEqual("Show guidelines");
  });

  test("that the body is not rendered when no children is set", () => {
    wrapper.setProps({ children: null });

    expect(wrapper.find(".guideline__body")).toHaveLength(0);

    expect(wrapper.find(".guideline__button")).toHaveLength(0);
  });

  test("sets the max height", () => {
    expect(wrapper.find(".guideline__body").prop("style")).toEqual({
      maxHeight: 120,
    });
    wrapper.find(Button).simulate("click");

    expect(wrapper.find(".guideline__body").prop("style")).toEqual(null);
  });

  test("padding the correct state to the onToggle callback", () => {
    const onToggleSpy = jest.fn();
    wrapper.setProps({ onToggle: onToggleSpy });

    wrapper.find(Button).simulate("click");

    expect(onToggleSpy).toHaveBeenCalledWith(false);

    wrapper.find(Button).simulate("click");

    expect(onToggleSpy).toHaveBeenCalledWith(true);
  });
});
