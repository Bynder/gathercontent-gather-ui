import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Dropd... Remove this comment to see the full error message
import { Dropdown, Avatar, AvatarInformation } from "../../lib";
import UserSearchList from "../../lib/UserSearch/UserSearchList";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("User Search List", () => {
  let wrapper: any;
  let addUserSpy: any;

  const users = [
    {
      id: "saul",
      display: "saulgoodman",
      name: "Saul Goodman",
      initials: "SG",
      email: "hellothere@lol.com",
    },
    {
      id: "456",
      display: "jessepinkman",
      name: "Jesse Pinkman",
      email: "heythere@lol.com",
      initials: "JP",
      avatar:
        "https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg",
    },
  ];
  const props = {
    users,
    displayEmail: true,
    selectedUserIds: [users[1].id],
    noUsers: false,
    noUserDisplay: "oopsie no users",
    hideAfterPerformingAction: false,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    addUserSpy = jest.fn();
    wrapper = shallow(<UserSearchList addUser={addUserSpy} {...props} />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the correct amount of users", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Dropdown.Action)).toHaveLength(2);
    wrapper.find(Dropdown.Action).first().prop("action")();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(addUserSpy).toHaveBeenCalledWith(users[0]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Dropdown.Action).first().prop("selected")).toEqual(
      false
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Dropdown.Action).last().prop("selected")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Avatar)).toHaveLength(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Avatar).last().prop("url")).toEqual(users[1].avatar);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(AvatarInformation)).toHaveLength(2);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(AvatarInformation).last().prop("email")).toEqual(
      users[1].email
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders no results text", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".no-results")).toHaveLength(0);
    wrapper.setProps({ users: [] });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".no-results")).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".no-results").text()).toEqual(
      "Oops! No people found."
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders no users text", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".no-results")).toHaveLength(0);
    wrapper.setProps({ noUsers: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".no-results")).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".no-results").text()).toEqual(props.noUserDisplay);
  });
});
