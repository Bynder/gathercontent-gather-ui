import { FinderNavigation } from "lib";
import { React, shallow } from "../setup";

describe("FinderNavigation Content", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.ItemContent>
        <FinderNavigation.ItemSettings>hello!</FinderNavigation.ItemSettings>
      </FinderNavigation.ItemContent>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(FinderNavigation.ItemSettings)).toHaveLength(1);
  });
});
