import { React, shallow } from "../setup";
import ToggleFilter from "../../lib/Search/ToggleFilter";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Check... Remove this comment to see the full error message
import { CheckToggle } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchBoundaryListener", () => {
  let wrapper: any;
  let clickHandlerSpy: any;
  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    clickHandlerSpy = jest.fn();
    wrapper = shallow(
      <ToggleFilter
        label="search toggle"
        clickHandler={clickHandlerSpy}
        displayChecked
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a CheckToggle", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("clickHandler")).toEqual(
      clickHandlerSpy
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("labelRight")).toEqual(
      "search toggle"
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("displaySmall")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("displayChecked")).toEqual(true);
  });
});
