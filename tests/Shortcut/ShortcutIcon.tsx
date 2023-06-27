import { React, mount } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Short... Remove this comment to see the full error message
import { ShortcutIcon } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Shortcut/ShortcutIcon", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(<ShortcutIcon>i</ShortcutIcon>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a the icon children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.text()).toEqual("i");
  });
});
