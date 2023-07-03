import { TopBarContent } from "lib";
import { React, shallow } from "../setup";

describe("TopBar/TopBarContent", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <TopBarContent>
        <div className="test">Test child</div>
      </TopBarContent>
    );
  });

  afterEach(() => {});

  test("renders its children", () => {
    expect(wrapper.find(".test")).toHaveLength(1);
  });

  test("adds a left class when left prop is there", () => {
    wrapper.setProps({
      left: true,
    });

    expect(wrapper.find(".top-bar__content--left")).toHaveLength(1);
  });

  test("adds a center class when center prop is there", () => {
    wrapper.setProps({
      center: true,
    });

    expect(wrapper.find(".top-bar__content--center")).toHaveLength(1);
  });

  test("adds a right class when right prop is there", () => {
    wrapper.setProps({
      right: true,
    });

    expect(wrapper.find(".top-bar__content--right")).toHaveLength(1);
  });

  test("adds a collapse class when collapse is passed", () => {
    wrapper.setProps({
      collapse: true,
    });

    expect(wrapper.find(".top-bar__content--collapse")).toHaveLength(1);
  });
});
