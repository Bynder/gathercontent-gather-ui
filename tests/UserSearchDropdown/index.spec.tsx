import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'UserS... Remove this comment to see the full error message
import { UserSearchDropdown, Icon } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("User Search Dropdown", () => {
  let wrapper: any;
  let addUserSpy;

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

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    addUserSpy = jest.fn();
    wrapper = shallow(
      <UserSearchDropdown
        addUser={addUserSpy}
        users={users}
        displayEmail={false}
        dropdownAutoPosition
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("uses the addPerson icon by default but uses the at icon if useAtIcon is true", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon).prop("name")).toEqual("addPerson");
    wrapper.setProps({ useAtIcon: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon).prop("name")).toEqual("at");
  });
});
