import { React, shallow } from "../setup";
import { PureUserSearch } from "../../lib/UserSearch";
import UserSearchHead from "../../lib/UserSearch/UserSearchHead";
import UserSearchList from "../../lib/UserSearch/UserSearchList";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("User Search", () => {
  let wrapper: any;
  let addUserSpy: any;
  let onToggleSpy;

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
    searchHeading: "Search me!",
    subheading: "please search i have kids to feed",
    useDisplayToggle: true,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    addUserSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onToggleSpy = jest.fn();
    const ref = React.createRef();
    wrapper = shallow(
      <PureUserSearch
        addUser={addUserSpy}
        ref={ref}
        onToggle={onToggleSpy}
        {...props}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a UserSearchHead", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchHead)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchHead).prop("searchHeading")).toEqual(
      props.searchHeading
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchHead).prop("subheading")).toEqual(
      props.subheading
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchHead).prop("useDisplayToggle")).toEqual(
      props.useDisplayToggle
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders an input to search", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".user-search__search-input")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a UserSearchList", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchList)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchList).prop("noUsers")).toEqual(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(UserSearchList).prop("addUser")).toEqual(addUserSpy);
  });
});
