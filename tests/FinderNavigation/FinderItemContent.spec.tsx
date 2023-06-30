import { React, shallow } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Finde... Remove this comment to see the full error message
import { FinderNavigation } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("FinderNavigation Content", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.ItemContent>
        <FinderNavigation.ItemSettings>hello!</FinderNavigation.ItemSettings>
      </FinderNavigation.ItemContent>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(FinderNavigation.ItemSettings)).toHaveLength(1);
  });
});
