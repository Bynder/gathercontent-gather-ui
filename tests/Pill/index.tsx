import { React, mount } from "../setup";
import Pill from "../../lib/Pill";

describe("Pill", () => {
  test("should render children", () => {
    const wrapper = mount(
      <Pill>
        <h1>Content</h1>
      </Pill>
    );

    expect(wrapper.find("h1")).toHaveLength(1);
  });
});
