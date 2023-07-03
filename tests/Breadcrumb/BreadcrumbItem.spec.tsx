import { Breadcrumb } from "lib";
import { React, shallow } from "../setup";

describe("Breadcrumb.Item", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      // @ts-expect-error
      <Breadcrumb.Item className="test">
        <a href="/">Test 1</a>
      </Breadcrumb.Item>
    );
  });

  test("renders a link", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });
});
