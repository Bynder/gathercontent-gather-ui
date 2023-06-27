import { React, mount } from "../setup";
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Short... Remove this comment to see the full error message
import { Shortcut, ShortcutIcon } from "../../lib";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Shortcut", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = mount(
      <Shortcut name="Bold" styleClass="shortcut__bold">
        <ShortcutIcon>⌘</ShortcutIcon>
        <ShortcutIcon>Option</ShortcutIcon>
        <ShortcutIcon>b</ShortcutIcon>
      </Shortcut>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a Shortcut title div with class shortcut__bold", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".shortcut__bold")).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders 3 a ShortcutIcons", () => {
    const icon = wrapper.find(ShortcutIcon);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(icon).toHaveLength(3);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(icon.first().text()).toEqual("⌘");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("can render a single icon", () => {
    const shortcut = mount(
      <Shortcut name="Bold" styleClass="shortcut__bold">
        <ShortcutIcon>⌘</ShortcutIcon>
      </Shortcut>
    );
    const icon = shortcut.find(ShortcutIcon);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(icon).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(icon.first().text()).toEqual("⌘");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders 2 shortcut__plus divs", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".shortcut__plus")).toHaveLength(2);
  });
});
