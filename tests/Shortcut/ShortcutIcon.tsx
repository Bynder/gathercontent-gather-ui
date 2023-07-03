import { ShortcutIcon } from "lib";
import { React, mount } from "../setup";

describe("Shortcut/ShortcutIcon", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(<ShortcutIcon>i</ShortcutIcon>);
  });

  test("renders a the icon children", () => {
    expect(wrapper.text()).toEqual("i");
  });
});
