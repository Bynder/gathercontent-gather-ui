import { React, shallow } from "../setup";
import SearchBody from "../../lib/Search/SearchBody";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchBody", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <SearchBody className="waffles">
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">small child</div>
      </SearchBody>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds the className prop", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("waffles")).toBe(true);
  });
});
