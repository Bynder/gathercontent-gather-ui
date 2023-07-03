import { FinderNavigation } from "lib";
import { React, shallow } from "../setup";

describe("FinderNavigation Content", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.ItemSettings>
        <div className="waffles">Hello!</div>
      </FinderNavigation.ItemSettings>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(".waffles")).toHaveLength(1);
  });
});
