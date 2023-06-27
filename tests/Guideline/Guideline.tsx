import { React, mount } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Guide... Remove this comment to see the full error message
import { Guideline, Button } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Guideline", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      height: 120,
    }));

    wrapper = mount(
      <Guideline title="Guideline title">
        // @ts-expect-error TS(2304): Cannot find name 'p'.
        <p>Guideline content</p>
      </Guideline>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("defaults to open", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".guideline").hasClass("is-active")).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("toggles an active class", () => {
    wrapper.find(Button).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("is-active")).toBe(false);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the showContent state to true", () => {
    wrapper.find(Button).prop("clickHandler")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("p")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("switches the text for the show toggle", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).prop("children")).toEqual("Hide guidelines");
    wrapper.find(Button).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).prop("children")).toEqual("Show guidelines");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("that the body is not rendered when no children is set", () => {
    wrapper.setProps({ children: null });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".guideline__body")).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".guideline__button")).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the max height", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".guideline__body").prop("style")).toEqual({
      maxHeight: 120,
    });
    wrapper.find(Button).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".guideline__body").prop("style")).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("padding the correct state to the onToggle callback", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const onToggleSpy = jest.fn();
    wrapper.setProps({ onToggle: onToggleSpy });

    wrapper.find(Button).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleSpy).toHaveBeenCalledWith(false);

    wrapper.find(Button).simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onToggleSpy).toHaveBeenCalledWith(true);
  });
});
