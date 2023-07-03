import { React, shallow } from "../setup";
import { CheckToggle } from "lib";
import UserSearchHead from "../../lib/UserSearch/UserSearchHead";

describe("User Search Head", () => {
  let wrapper: any;
  let toggleListDisplaySpy: any;
  const props = {
    searchHeading: "Search me!",
    subheading: "please search i have kids to feed",
    useDisplayToggle: true,
    toggleActive: true,
  };

  beforeEach(() => {
    toggleListDisplaySpy = jest.fn();

    wrapper = shallow(
      <UserSearchHead toggleListDisplay={toggleListDisplaySpy} {...props} />
    );
  });

  test("renders the heading and subheading", () => {
    expect(wrapper.find(".user-search__search-heading").text()).toEqual(
      props.searchHeading
    );

    expect(wrapper.find(".user-search__search-subheading").text()).toEqual(
      props.subheading
    );
  });

  test("renders a CheckToggle", () => {
    expect(wrapper.find(CheckToggle)).toHaveLength(1);

    expect(wrapper.find(CheckToggle).prop("displaySmall")).toEqual(true);

    expect(wrapper.find(CheckToggle).prop("displayChecked")).toEqual(
      props.toggleActive
    );

    expect(wrapper.find(CheckToggle).prop("clickHandler")).toEqual(
      toggleListDisplaySpy
    );
  });

  test("doesnt render a CheckToggle", () => {
    wrapper.setProps({ useDisplayToggle: false });

    expect(wrapper.find(CheckToggle)).toHaveLength(0);
  });
});
