import { React, mount } from "../setup";
import SearchInput from "../../lib/Search/SearchInput";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Short... Remove this comment to see the full error message
import { ShortcutTrigger } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchInput", () => {
  let wrapper: any;
  let onChangeSpy: any;
  let hideBodySpy: any;
  let displayBodySpy: any;
  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onChangeSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    hideBodySpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    displayBodySpy = jest.fn();
    wrapper = mount(
      <SearchInput
        // @ts-expect-error TS(2552): Cannot find name 'onChange'. Did you mean 'onchang... Remove this comment to see the full error message
        onChange={onChangeSpy}
        hideBody={hideBodySpy}
        showBody={false}
        displayBody={displayBodySpy}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders an input", () => {
    const input = wrapper.find(".search__input--input");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.hostNodes()).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("onChange")).toEqual(wrapper.instance().handleChange);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("onFocus")).toEqual(wrapper.instance().handleFocus);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a clear button", () => {
    const clear = wrapper.find(".search__input--clear");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(clear.hostNodes()).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(clear.at(0).prop("clickHandler")).toEqual(
      wrapper.instance().clearInput
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a start button", () => {
    const start = wrapper.find(".search__input--start");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(start.hostNodes()).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(start.at(0).prop("clickHandler")).toEqual(
      wrapper.instance().handleSearchClick
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("handles a change", () => {
    let mockEvent = { target: { value: "waff" } };
    wrapper.instance().handleChange(mockEvent);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).toHaveBeenCalledWith("waff");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(displayBodySpy).toHaveBeenCalled();
    mockEvent = { target: { value: "" } };
    wrapper.instance().handleChange(mockEvent);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).toHaveBeenCalledWith("");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(hideBodySpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("handles clearInput", () => {
    wrapper.instance().clearInput();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onChangeSpy).toHaveBeenCalledWith("");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(hideBodySpy).toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("handles focus", () => {
    wrapper.instance().handleFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("isFocussed")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a ShortcutTrigger", () => {
    const trigger = wrapper.find(ShortcutTrigger);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(trigger.prop("onShortcutTrigger")).toEqual(
      wrapper.instance().handleEscape
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(trigger.prop("shortcutKey")).toEqual("Escape");
    wrapper.instance().handleEscape();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(hideBodySpy).toHaveBeenCalled();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("isFocussed")).toEqual(false);
  });
});
