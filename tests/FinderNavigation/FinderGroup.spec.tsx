import { FinderNavigation } from "lib";
import { React, shallow } from "../setup";

describe("FinderNavigation Group", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Group title="waffles">
        <FinderNavigation.Item>hello!</FinderNavigation.Item>
      </FinderNavigation.Group>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(FinderNavigation.Item)).toHaveLength(1);
  });

  test("displays the title", () => {
    expect(wrapper.find(".finder-group-title")).toHaveLength(1);

    expect(wrapper.find(".finder-group-title").text()).toEqual("waffles");
  });
});
