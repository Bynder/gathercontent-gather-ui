import { React, mount } from "../../setup";
import NotificationBar from "../../../lib/Notification/bar";
import Button from "../../../lib/Button";
import Icon from "../../../lib/Icon";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Notification", () => {
  let wrapper: any;
  let onCloseSpy: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onCloseSpy = jest.fn();
    wrapper = mount(<NotificationBar level="warning">Dummy</NotificationBar>);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders children", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.contains("Dummy")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders the correct level class", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("div").first().hasClass("bg-yellow-primary text-neutral-20")
    ).toEqual(true);
    wrapper.setProps({ level: "danger" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("div").first().hasClass("bg-red-primary text-white")
    ).toEqual(true);
    wrapper.setProps({ level: "information" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("div").first().hasClass("bg-blue-primary text-white")
    ).toEqual(true);
    wrapper.setProps({ level: "promo" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper.find("div").first().hasClass("bg-purple-primary text-white")
    ).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a close button", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button)).toHaveLength(0);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon)).toHaveLength(0);
    wrapper.setProps({ onClose: onCloseSpy });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).prop("onClick")).toEqual(onCloseSpy);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
});
