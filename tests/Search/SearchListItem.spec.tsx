import { React, shallow } from "../setup";
import SearchListItem from "../../lib/Search/SearchListItem";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("SearchListItem", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <SearchListItem title="The title!" subText="The sub text!">
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">small child</div>
      </SearchListItem>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the title and subText", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".search-item__title").text()).toEqual("The title!");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".search-item__subtext").text()).toEqual(
      "The sub text!"
    );
  });
});
