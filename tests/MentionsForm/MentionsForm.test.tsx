import { React, mount } from "../setup";
import MentionsForm from "../../lib/MentionsForm";
import Avatar from "../../lib/Avatar";
import MentionsFormActions from "../../lib/MentionsForm/MentionsFormActions";
import ShortcutTrigger from "../../lib/ShortcutTrigger/index";
import MentionsFormInput from "../../lib/MentionsForm/MentionsFormInput";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Mentions Form", () => {
  let wrapper: any;
  let onSubmitSpy: any;
  let onCancelSpy: any;
  let onInputChangeSpy;
  const onRowCountChange = () => {};

  const props = {
    id: "123",
    author: {
      name: "Bruce",
      avatar: "url/of/image",
      initials: "BB",
    },
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onSubmitSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onCancelSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onInputChangeSpy = jest.fn();
    wrapper = mount(
      // @ts-expect-error TS(2352): Conversion of type '{ id: string; author: { name: ... Remove this comment to see the full error message
      <MentionsForm
        {...props}
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
        onInputChange={onInputChangeSpy}
        onRowCountChange={onRowCountChange}
        users={[]}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("sets the initial state", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("inputValue")).toEqual("");
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a state class of has-value", () => {
    wrapper.setState({ inputValue: "test" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("form").hasClass("has-value")).toBe(true);

    wrapper.setState({ inputValue: "" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("form").hasClass("has-value")).toBe(false);

    wrapper.setProps({ value: "test" });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find("form").hasClass("has-value")).toBe(true);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(MentionsFormActions).prop("disableSubmit")).toEqual(
      false
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls props.onSubmit", () => {
    wrapper.find("form").simulate("submit");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("removes mention markup onSubmit", () => {
    wrapper.setState({ inputValue: "testing testing @[waffles]" });
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    const preventDefaultSpy = jest.fn();
    const event = { preventDefault: preventDefaultSpy };
    wrapper.instance().onSubmit(event);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onSubmitSpy).toHaveBeenCalledWith("testing testing @waffles", [
      "waffles",
    ]);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls props.onCancel", () => {
    wrapper.instance().cancelComment();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders an avatar (with the correct props)", () => {
    const avatar = wrapper.find(Avatar);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(avatar).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(avatar.prop("url")).toEqual(props.author.avatar);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(avatar.prop("initials")).toEqual(props.author.initials);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("does not render an avatar", () => {
    wrapper.setProps({ showAuthor: false });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Avatar)).toHaveLength(0);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders MentionsFormInput (with correct props)", () => {
    let input = wrapper.find(MentionsFormInput);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("handleOnChange")).toEqual(
      wrapper.instance().updateInputValue
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("focusOnMount")).toEqual(false);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("inputValue")).toEqual("");

    wrapper.setState({ inputValue: "test" });
    wrapper.update();
    input = wrapper.find(MentionsFormInput);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("inputValue")).toEqual("test");

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("handleOnFocus")).toEqual(
      wrapper.instance().toggleInputHasFocus
    );

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("users")).toEqual([]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.prop("defaultUsers")).toEqual([]);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders MentionsFormActions (with correct props)", () => {
    wrapper.setProps({ value: "test" });
    const actions = wrapper.find(MentionsFormActions);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(actions).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(actions.prop("onSubmit")).toEqual(wrapper.instance().onSubmit);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(actions.prop("onCancel")).toEqual(wrapper.instance().cancelComment);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("updates the mention count", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("mentionCount")).toEqual(0);
    wrapper
      .instance()
      .updateInputValue({ target: { value: "@waffle @[plop]" } });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("mentionCount")).toEqual(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("toggles the focus state for the input", () => {
    wrapper.instance().toggleInputHasFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("inputHasFocused")).toEqual(true);

    wrapper.instance().toggleInputHasFocus();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.state("inputHasFocused")).toEqual(false);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders ShortcutTriggers", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(ShortcutTrigger)).toHaveLength(0);
    wrapper.setState({ inputHasFocused: true });
    const shortcutTriggers = wrapper.find(ShortcutTrigger);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers).toHaveLength(2);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers.first().prop("shortcutKey")).toEqual("Enter");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers.first().prop("onShortcutTrigger")).toEqual(
      wrapper.instance().onSubmit
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers.first().prop("withCtrlKey")).toEqual(true);

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers.last().prop("shortcutKey")).toEqual("Enter");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers.last().prop("onShortcutTrigger")).toEqual(
      wrapper.instance().onSubmit
    );
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(shortcutTriggers.last().prop("withMetaKey")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds an inline modifier when editing", () => {
    wrapper.setProps({ editing: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.render().hasClass("mention-form--inline")).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("disables the input intil it contains a mention", () => {
    wrapper.setProps({ disableUntilMention: true });
    wrapper.setState({ mentionCount: 0 });
    wrapper.instance().forceUpdate();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(MentionsFormActions).prop("disableSubmit")).toEqual(
      true
    );
    wrapper.setState({ inputValue: "test @waffles" });
    wrapper.setState({ mentionCount: 1 });
    wrapper.instance().forceUpdate();
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(MentionsFormActions).prop("disableSubmit")).toEqual(
      false
    );
  });
});
