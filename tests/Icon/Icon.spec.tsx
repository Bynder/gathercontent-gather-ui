import { React, shallow } from "../setup";
import Icon from "../../lib/Icon";

describe("Icon", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Icon className="custom-icon-class" name="comment" />);
  });

  afterEach(() => {});

  test("adds a className prop to classNames", () => {
    expect(wrapper.hasClass("custom-icon-class")).toEqual(true);
  });

  test("adds a BEM modifier with the name prop", () => {
    wrapper.setProps({ name: "comment" });

    expect(wrapper.hasClass("icon--comment")).toEqual(true);
  });

  test("adds a modifier class of icon--hide-text", () => {
    wrapper.setProps({ hideText: true });

    expect(wrapper.hasClass("icon--hide-text")).toEqual(true);
  });

  test("only renders icon__text when props.text has been set", () => {
    expect(wrapper.find(".icon__text")).toHaveLength(0);
    wrapper.setProps({ text: "hello world" });

    expect(wrapper.find(".icon__text")).toHaveLength(1);

    expect(wrapper.find(".icon__text").text()).toBe("hello world");
  });

  test("adds a notification", () => {
    expect(wrapper.hasClass("icon--has-notification")).toEqual(false);

    expect(wrapper.find(".icon__notification")).toHaveLength(0);
    wrapper.setProps({ notification: 2 });

    expect(wrapper.hasClass("icon--has-notification")).toEqual(true);

    expect(wrapper.find(".icon__notification")).toHaveLength(1);
  });
});
