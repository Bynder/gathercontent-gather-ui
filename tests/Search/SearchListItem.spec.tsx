import { React, shallow } from "../setup";
import SearchListItem from "../../lib/Search/SearchListItem";

describe("SearchListItem", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <SearchListItem title="The title!" subText="The sub text!">
        <div className="child">small child</div>
      </SearchListItem>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  test("renders the title and subText", () => {
    expect(wrapper.find(".search-item__title").text()).toEqual("The title!");

    expect(wrapper.find(".search-item__subtext").text()).toEqual(
      "The sub text!"
    );
  });
});
