import { React, shallow } from "../setup";
import Icon from "../../lib/Icon";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Icon", () => {
  let wrapper: any;

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(<Icon className="custom-icon-class" name="comment" />);
  });

  // @ts-expect-error TS(2304): Cannot find name 'afterEach'.
  afterEach(() => {});

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a className prop to classNames", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("custom-icon-class")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a BEM modifier with the name prop", () => {
    wrapper.setProps({ name: "comment" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("icon--comment")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a modifier class of icon--hide-text", () => {
    wrapper.setProps({ hideText: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("icon--hide-text")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("only renders icon__text when props.text has been set", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".icon__text")).toHaveLength(0);
    wrapper.setProps({ text: "hello world" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".icon__text")).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".icon__text").text()).toBe("hello world");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a notification", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("icon--has-notification")).toEqual(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".icon__notification")).toHaveLength(0);
    wrapper.setProps({ notification: 2 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.hasClass("icon--has-notification")).toEqual(true);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".icon__notification")).toHaveLength(1);
  });
});
