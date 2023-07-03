import { React, shallow } from "../setup";
import { TopBarCell } from "lib";

describe("TopBar/TopBarCell", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <TopBarCell>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
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
