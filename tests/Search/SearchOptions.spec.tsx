import { React, shallow } from "../setup";
import SearchOptions from "../../lib/Search/SearchOptions";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchOptions", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <SearchOptions>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">small child</div>
      </SearchOptions>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".child")).toHaveLength(1);
  });
});
