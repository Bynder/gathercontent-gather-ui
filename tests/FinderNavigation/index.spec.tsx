import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Finde... Remove this comment to see the full error message
import { FinderNavigation } from "../../lib";
import FinderItem from "../../lib/FinderNavigation/FinderItem";
import FinderGroup from "../../lib/FinderNavigation/FinderGroup";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("FinderNavigation", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation>
        <FinderNavigation.Group>hello!</FinderNavigation.Group>
      </FinderNavigation>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(FinderNavigation.Group)).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the compound static props", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(FinderNavigation.Group).toEqual(FinderGroup);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(FinderNavigation.Item).toEqual(FinderItem);
  });
});
