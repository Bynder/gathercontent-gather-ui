import { React, shallow } from "../setup";
import { TopBarGroup } from "lib";

describe("TopBar/TopBarGroup", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <TopBarGroup>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="test">Test child</div>
      </TopBarGroup>
    );
  });

  afterEach(() => {});

  test("renders its children", () => {
    expect(wrapper.find(".test")).toHaveLength(1);
  });

  test("adds a collapse class when collapse prop is there", () => {
    wrapper.setProps({
      collapse: true,
    });

    expect(wrapper.find(".top-bar__group--collapse")).toHaveLength(1);
  });
});
