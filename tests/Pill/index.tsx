import { React, mount } from "../setup";
import Pill from "../../lib/Pill";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Pill", () => {
  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("should render children", () => {
    const wrapper = mount(
      <Pill>
        <h1>Content</h1>
      </Pill>
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
