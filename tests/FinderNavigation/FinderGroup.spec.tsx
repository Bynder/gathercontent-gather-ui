import { React, shallow } from "../setup";
import { FinderNavigation } from "lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("FinderNavigation Group", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Group title="waffles">
        // @ts-expect-error TS(2304): Cannot find name 'hello'.
        <FinderNavigation.Item>hello!</FinderNavigation.Item>
      </FinderNavigation.Group>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(FinderNavigation.Item)).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the title", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".finder-group-title")).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".finder-group-title").text()).toEqual("waffles");
  });
});
