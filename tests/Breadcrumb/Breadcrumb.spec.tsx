import { React, shallow } from "../setup";
import { Breadcrumb } from "lib";

describe("Breadcrumb", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Breadcrumb className="test">
        <a href="/">Test 1</a>
        <a href="/">Test 2</a>
        <a href="/">Test 3</a>
      </Breadcrumb>
    );
  });

  test("renders 3 links", () => {
    expect(wrapper.find("a")).toHaveLength(3);
  });

  test("adding a className to container", () => {
    expect(wrapper.hasClass("test")).toBe(true);
  });
});
