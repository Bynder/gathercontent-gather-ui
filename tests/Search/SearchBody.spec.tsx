import { React, shallow } from "../setup";
import SearchBody from "../../lib/Search/SearchBody";

describe("SearchBody", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <SearchBody className="waffles">
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child">small child</div>
      </SearchBody>
    );
  });

  test("renders children", () => {
    expect(wrapper.find(".child")).toHaveLength(1);
  });

  test("adds the className prop", () => {
    expect(wrapper.hasClass("waffles")).toBe(true);
  });
});
