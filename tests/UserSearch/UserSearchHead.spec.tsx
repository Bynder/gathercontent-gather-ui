import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Check... Remove this comment to see the full error message
import { CheckToggle } from "../../lib";
import UserSearchHead from "../../lib/UserSearch/UserSearchHead";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("User Search Head", () => {
  let wrapper: any;
  let toggleListDisplaySpy: any;
  const props = {
    searchHeading: "Search me!",
    subheading: "please search i have kids to feed",
    useDisplayToggle: true,
    toggleActive: true,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    toggleListDisplaySpy = jest.fn();

    wrapper = shallow(
      <UserSearchHead toggleListDisplay={toggleListDisplaySpy} {...props} />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the heading and subheading", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".user-search__search-heading").text()).toEqual(
      props.searchHeading
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".user-search__search-subheading").text()).toEqual(
      props.subheading
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a CheckToggle", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("displaySmall")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("displayChecked")).toEqual(
      props.toggleActive
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle).prop("clickHandler")).toEqual(
      toggleListDisplaySpy
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("doesnt render a CheckToggle", () => {
    wrapper.setProps({ useDisplayToggle: false });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(CheckToggle)).toHaveLength(0);
  });
});
