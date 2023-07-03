import { TopBarCell } from "lib";
import { React, shallow } from "../setup";

describe("TopBar/TopBarCell", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <TopBarCell>
        <div className="test">Test child</div>
      </TopBarCell>
    );
  });

  afterEach(() => {});

  test("renders its children", () => {
    expect(wrapper.find(".test")).toHaveLength(1);
  });

  test("adds a bordered class when bordered prop is there", () => {
    wrapper.setProps({
      bordered: true,
    });

    expect(wrapper.find(".top-bar__cell--bordered")).toHaveLength(1);
  });

  test("adds a className", () => {
    wrapper.setProps({
      className: "waffles",
    });

    expect(wrapper.find(".waffles")).toHaveLength(1);
  });
});
