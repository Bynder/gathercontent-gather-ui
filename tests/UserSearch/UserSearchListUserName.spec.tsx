import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Icon'... Remove this comment to see the full error message
import { Icon } from "../../lib";
import UserSearchListUserName from "../../lib/UserSearch/UserSearchListUserName";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("User Search Name", () => {
  let wrapper: any;
  const props = {
    name: "barry",
    isSelected: false,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<UserSearchListUserName {...props} />);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the name", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".text-overflow-ellipsis").text()).toEqual(props.name);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("is selected adds an is-active class and an Icon", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("is-active")).toEqual(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon)).toHaveLength(0);
    wrapper.setProps({ isSelected: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("is-active")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon).prop("name")).toEqual("boldTick");
  });
});
