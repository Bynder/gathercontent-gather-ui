import { React, shallow } from "../setup";
import Label from "../../lib/Form/Label";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Label", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<Label id="123" label="foo bar" />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('has a html label with a "for" attribute', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("label").prop("htmlFor")).toEqual("123");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("label").find(".form-input__text").prop("children")
    ).toContain("foo bar");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("may have a subtitle", () => {
    wrapper.setProps({ subtitle: "some description" });
    const expectedSubtitle = (
      <span className="form-checkbox__subtitle">some description</span>
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("label").contains(expectedSubtitle)).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a highlight modifier to the text", () => {
    wrapper.setProps({ highlight: true });
    const hasHighlightClass = wrapper
      .find(".form-input__text")
      .hasClass("is-highlight");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(hasHighlightClass).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds an active state class to the text", () => {
    wrapper.setProps({ active: true });
    const hasActiveClass = wrapper
      .find(".form-input__text")
      .hasClass("is-active");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(hasActiveClass).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds an disabled state class to the label", () => {
    wrapper.setProps({ disabled: true });
    const hasActiveClass = wrapper
      .find(".form-checkbox__label")
      .hasClass("is-disabled");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(hasActiveClass).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("is passed overrideLabelDefault as false, it renders a label and not a button", () => {
    wrapper.setProps({ overrideLabelDefault: false });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".form-checkbox__label")).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".form-checkbox__label--button")).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("is passed overrideLabelDefault as true, it renders a button instead of a label", () => {
    wrapper.setProps({ overrideLabelDefault: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".form-checkbox__label--button")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("is passed overrideLabelDefault as a function, it fires on click", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const labelClickSpy = jest.fn();
    wrapper.setProps({ overrideLabelDefault: labelClickSpy });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".form-checkbox__label--button")).toHaveLength(1);
    wrapper.simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(labelClickSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("labelMouseEnter and labelMouseLeave prop functions are called on mouseEnter and mouseLeave", () => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const labelMouseEnterSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const labelMouseLeaveSpy = jest.fn();
    wrapper.setProps({
      overrideLabelDefault: true,
      labelMouseEnter: labelMouseEnterSpy,
      labelMouseLeave: labelMouseLeaveSpy,
    });
    wrapper.simulate("mouseEnter");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(labelMouseEnterSpy).toHaveBeenCalled();
    wrapper.simulate("mouseLeave");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(labelMouseLeaveSpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adding a hinted modifier class", () => {
    wrapper.setProps({ hinted: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("form-checkbox__label--hinted")).toBe(true);
  });
});
