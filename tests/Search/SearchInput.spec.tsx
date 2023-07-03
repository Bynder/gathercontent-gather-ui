import { React, mount } from "../setup";
import SearchInput from "../../lib/Search/SearchInput";
import { ShortcutTrigger } from "lib";

describe("SearchInput", () => {
  let wrapper: any;
  let onChangeSpy: any;
  let hideBodySpy: any;
  let displayBodySpy: any;

  beforeEach(() => {
    onChangeSpy = jest.fn();

    hideBodySpy = jest.fn();

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

  test("renders an input", () => {
    const input = wrapper.find(".search__input--input");

    expect(input.hostNodes()).toHaveLength(1);

    expect(input.prop("onChange")).toEqual(wrapper.instance().handleChange);

    expect(input.prop("onFocus")).toEqual(wrapper.instance().handleFocus);
  });

  test("renders a clear button", () => {
    const clear = wrapper.find(".search__input--clear");

    expect(clear.hostNodes()).toHaveLength(1);

    expect(clear.at(0).prop("clickHandler")).toEqual(
      wrapper.instance().clearInput
    );
  });

  test("renders a start button", () => {
    const start = wrapper.find(".search__input--start");

    expect(start.hostNodes()).toHaveLength(1);

    expect(start.at(0).prop("clickHandler")).toEqual(
      wrapper.instance().handleSearchClick
    );
  });

  test("handles a change", () => {
    let mockEvent = { target: { value: "waff" } };
    wrapper.instance().handleChange(mockEvent);

    expect(onChangeSpy).toHaveBeenCalledWith("waff");

    expect(displayBodySpy).toHaveBeenCalled();
    mockEvent = { target: { value: "" } };
    wrapper.instance().handleChange(mockEvent);

    expect(onChangeSpy).toHaveBeenCalledWith("");

    expect(hideBodySpy).toHaveBeenCalled();
  });

  test("handles clearInput", () => {
    wrapper.instance().clearInput();

    expect(onChangeSpy).toHaveBeenCalledWith("");

    expect(hideBodySpy).toHaveBeenCalled();
  });

  test("handles focus", () => {
    wrapper.instance().handleFocus();

    expect(wrapper.state("isFocussed")).toEqual(true);
  });

  test("renders a ShortcutTrigger", () => {
    const trigger = wrapper.find(ShortcutTrigger);

    expect(trigger.prop("onShortcutTrigger")).toEqual(
      wrapper.instance().handleEscape
    );

    expect(trigger.prop("shortcutKey")).toEqual("Escape");
    wrapper.instance().handleEscape();

    expect(hideBodySpy).toHaveBeenCalled();

    expect(wrapper.state("isFocussed")).toEqual(false);
  });
});
