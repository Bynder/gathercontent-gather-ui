// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { MentionsInput } from "react-mentions";
import { React, mount } from "../setup";
import MentionFormInput from "../../lib/MentionsForm/MentionsFormInput";
import { UserSearchDropdown } from "lib";

describe("Mentions Form Input", () => {
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

  beforeEach(() => {
    handleOnFocusSpy = jest.fn();

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

  test("renders MentionsInput (with correct props)", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    const input = wrapper.find(MentionsInput);

    expect(input).toHaveLength(1);

    // @ts-expect-error
    expect(input.prop("onChange")).toEqual(wrapper.instance().handleChange);

    expect(input.prop("autoFocus")).toEqual(false);

    expect(input.prop("value")).toEqual("waffles");

    expect(input.prop("placeholder")).toEqual("wafflet");

    // @ts-expect-error
    expect(input.prop("onFocus")).toEqual(handleOnFocusSpy);

    // @ts-expect-error
    expect(input.prop("onBlur")).toEqual(handleOnFocusSpy);

    expect(input.prop("suggestionsPortalHost")).toEqual(null);
  });

  test("returns the correct filtered users", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    let results = wrapper.instance().searchForUsers("saul");

    expect(results).toEqual([users[0]]);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    results = wrapper.instance().searchForUsers("pink");

    expect(results).toEqual([users[1]]);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    results = wrapper.instance().searchForUsers("waffle");

    expect(results).toEqual([]);
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    results = wrapper.instance().searchForUsers("ood");

    expect(results).toEqual([]);
  });

  test("renders a UserSearchDropdown", () => {
    // @ts-expect-error
    expect(wrapper.find(UserSearchDropdown)).toHaveLength(1);
    // @ts-expect-error
    expect(wrapper.find(UserSearchDropdown).prop("users")).toEqual(users);
    // @ts-expect-error
    expect(wrapper.find(UserSearchDropdown).prop("addUser")).toEqual(
      // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
      wrapper.instance().addMention
    );
  });

  test("adds default users", () => {
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.setProps({ defaultUsers: users, inputValue: "" });
    // @ts-expect-error TS(2304): Cannot find name 'wrapper'.
    wrapper.instance().addDefaultUsers();

    jest.runAllTimers();
    // @ts-expect-error
    expect(handleOnChangeSpy).toHaveBeenCalledTimes(2);
    // @ts-expect-error
    expect(handleOnChangeSpy.mock.calls).toEqual([
      [{ target: { value: "@[saulgoodman] " } }],
      [{ target: { value: "@[jessepinkman] " } }],
    ]);
  });
});
