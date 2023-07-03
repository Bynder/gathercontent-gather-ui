import { FinderNavigation } from "lib";
import { React, shallow } from "../setup";

describe("FinderNavigation Item", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Item>
        <div className="child">hello!</div>
      </FinderNavigation.Item>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  test("adds an active class", () => {
    expect(wrapper.hasClass("finder-item-active")).toBe(false);
    wrapper.setProps({ active: true });

    expect(wrapper.hasClass("finder-item-active")).toBe(true);
  });
});
