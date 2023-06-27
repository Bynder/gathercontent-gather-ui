// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MentionsInput } from "react-mentions";
import { React, mount } from "../setup";
import MentionFormInput from "../../lib/MentionsForm/MentionsFormInput";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'UserS... Remove this comment to see the full error message
import { UserSearchDropdown } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Mentions Form Input", () => {
  // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
  jest.useFakeTimers();
  // @ts-expect-error
  let wrapper;
  // @ts-expect-error
  let handleOnFocusSpy;
  // @ts-expect-error
  let handleOnChangeSpy;

  const users = [
    {
      id: "saul",
      display: "saulgoodman",
      name: "Saul Goodman",
      initials: "SG",
      email: "heythere@lol.com",
    },
    {
      id: "456",
      display: "jessepinkman",
      name: "Jesse Pinkman",
      email: "heythere@lol.com",
      initials: "JP",
      url: "https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg",
    },
  ];

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    handleOnFocusSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    handleOnChangeSpy = jest.fn();
    wrapper = mount(
      <MentionFormInput
        inputValue="waffles"
        placeholder="wafflet"
        handleOnChange={handleOnChangeSpy}
        handleOnFocus={handleOnFocusSpy}
        focusOnMount={false}
        onRowCountChange={() => {}}
        users={users}
        // @ts-expect-error TS(2304): Cannot find name 'dropdownAutoTopPosition'.
        dropdownAutoTopPosition={false}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders MentionsInput (with correct props)", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const input = wrapper.find(MentionsInput);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("onChange")).toEqual(wrapper.instance().handleChange);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("autoFocus")).toEqual(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("value")).toEqual("waffles");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("placeholder")).toEqual("wafflet");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("onFocus")).toEqual(handleOnFocusSpy);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("onBlur")).toEqual(handleOnFocusSpy);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("suggestionsPortalHost")).toEqual(null);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("returns the correct filtered users", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    let results = wrapper.instance().searchForUsers("saul");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(results).toEqual([users[0]]);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    results = wrapper.instance().searchForUsers("pink");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(results).toEqual([users[1]]);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    results = wrapper.instance().searchForUsers("waffle");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(results).toEqual([]);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    results = wrapper.instance().searchForUsers("ood");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(results).toEqual([]);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a UserSearchDropdown", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchDropdown)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchDropdown).prop("users")).toEqual(users);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchDropdown).prop("addUser")).toEqual(
      // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
      wrapper.instance().addMention
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds default users", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ defaultUsers: users, inputValue: "" });
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().addDefaultUsers();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    jest.runAllTimers();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(handleOnChangeSpy).toHaveBeenCalledTimes(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(handleOnChangeSpy.mock.calls).toEqual([
      [{ target: { value: "@[saulgoodman] " } }],
      [{ target: { value: "@[jessepinkman] " } }],
    ]);
  });
});
