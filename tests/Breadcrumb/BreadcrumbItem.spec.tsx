import { React, shallow } from "../setup";
import { Breadcrumb } from "lib";

describe("Breadcrumb.Item", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      // @ts-expect-error
      <Breadcrumb.Item className="test">
        // @ts-expect-error TS(2304): Cannot find name 'a'.
        <a href="/">Test 1</a>
      </Breadcrumb.Item>
    );
  });

  test("renders a link", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });
});
