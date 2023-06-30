import { React, shallow } from "../setup";
import { FinderNavigation } from "lib";

describe("FinderNavigation Group", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Group title="waffles">
        // @ts-expect-error TS(2304): Cannot find name 'hello'.
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
