import { React, mount } from "../setup";
import MentionsForm from "../../lib/MentionsForm";
import Avatar from "../../lib/Avatar";
import MentionsFormActions from "../../lib/MentionsForm/MentionsFormActions";
import ShortcutTrigger from "../../lib/ShortcutTrigger/index";
import MentionsFormInput from "../../lib/MentionsForm/MentionsFormInput";

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

  beforeEach(() => {
    onSubmitSpy = jest.fn();

    onCancelSpy = jest.fn();

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

  test("sets the initial state", () => {
    expect(wrapper.state("inputValue")).toEqual("");
  });

  test("adds a state class of has-value", () => {
    wrapper.setState({ inputValue: "test" });

    expect(wrapper.find("form").hasClass("has-value")).toBe(true);

    wrapper.setState({ inputValue: "" });

    expect(wrapper.find("form").hasClass("has-value")).toBe(false);

    wrapper.setProps({ value: "test" });

    expect(wrapper.find("form").hasClass("has-value")).toBe(true);

    expect(wrapper.find(MentionsFormActions).prop("disableSubmit")).toEqual(
      false
    );
  });

  test("calls props.onSubmit", () => {
    wrapper.find("form").simulate("submit");

    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  test("removes mention markup onSubmit", () => {
    wrapper.setState({ inputValue: "testing testing @[waffles]" });

    const preventDefaultSpy = jest.fn();
    const event = { preventDefault: preventDefaultSpy };
    wrapper.instance().onSubmit(event);

    expect(onSubmitSpy).toHaveBeenCalledWith("testing testing @waffles", [
      "waffles",
    ]);
  });

  test("calls props.onCancel", () => {
    wrapper.instance().cancelComment();

    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test("renders an avatar (with the correct props)", () => {
    const avatar = wrapper.find(Avatar);

    expect(avatar).toHaveLength(1);

    expect(avatar.prop("url")).toEqual(props.author.avatar);

    expect(avatar.prop("initials")).toEqual(props.author.initials);
  });

  test("does not render an avatar", () => {
    wrapper.setProps({ showAuthor: false });

    expect(wrapper.find(Avatar)).toHaveLength(0);
  });

  test("renders MentionsFormInput (with correct props)", () => {
    let input = wrapper.find(MentionsFormInput);

    expect(input).toHaveLength(1);

    expect(input.prop("handleOnChange")).toEqual(
      wrapper.instance().updateInputValue
    );

    expect(input.prop("focusOnMount")).toEqual(false);

    expect(input.prop("inputValue")).toEqual("");

    wrapper.setState({ inputValue: "test" });
    wrapper.update();
    input = wrapper.find(MentionsFormInput);

    expect(input.prop("inputValue")).toEqual("test");

    expect(input.prop("handleOnFocus")).toEqual(
      wrapper.instance().toggleInputHasFocus
    );

    expect(input.prop("users")).toEqual([]);

    expect(input.prop("defaultUsers")).toEqual([]);
  });

  test("renders MentionsFormActions (with correct props)", () => {
    wrapper.setProps({ value: "test" });
    const actions = wrapper.find(MentionsFormActions);

    expect(actions).toHaveLength(1);

    expect(actions.prop("onSubmit")).toEqual(wrapper.instance().onSubmit);

    expect(actions.prop("onCancel")).toEqual(wrapper.instance().cancelComment);
  });

  test("updates the mention count", () => {
    expect(wrapper.state("mentionCount")).toEqual(0);
    wrapper
      .instance()
      .updateInputValue({ target: { value: "@waffle @[plop]" } });

    expect(wrapper.state("mentionCount")).toEqual(2);
  });

  test("toggles the focus state for the input", () => {
    wrapper.instance().toggleInputHasFocus();

    expect(wrapper.state("inputHasFocused")).toEqual(true);

    wrapper.instance().toggleInputHasFocus();

    expect(wrapper.state("inputHasFocused")).toEqual(false);
  });

  test("renders ShortcutTriggers", () => {
    expect(wrapper.find(ShortcutTrigger)).toHaveLength(0);
    wrapper.setState({ inputHasFocused: true });
    const shortcutTriggers = wrapper.find(ShortcutTrigger);

    expect(shortcutTriggers).toHaveLength(2);

    expect(shortcutTriggers.first().prop("shortcutKey")).toEqual("Enter");

    expect(shortcutTriggers.first().prop("onShortcutTrigger")).toEqual(
      wrapper.instance().onSubmit
    );

    expect(shortcutTriggers.first().prop("withCtrlKey")).toEqual(true);

    expect(shortcutTriggers.last().prop("shortcutKey")).toEqual("Enter");

    expect(shortcutTriggers.last().prop("onShortcutTrigger")).toEqual(
      wrapper.instance().onSubmit
    );

    expect(shortcutTriggers.last().prop("withMetaKey")).toEqual(true);
  });

  test("adds an inline modifier when editing", () => {
    wrapper.setProps({ editing: true });
    wrapper.update();

    expect(wrapper.render().hasClass("mention-form--inline")).toBe(true);
  });

  test("disables the input intil it contains a mention", () => {
    wrapper.setProps({ disableUntilMention: true });
    wrapper.setState({ mentionCount: 0 });
    wrapper.instance().forceUpdate();
    wrapper.update();

    expect(wrapper.find(MentionsFormActions).prop("disableSubmit")).toEqual(
      true
    );
    wrapper.setState({ inputValue: "test @waffles" });
    wrapper.setState({ mentionCount: 1 });
    wrapper.instance().forceUpdate();
    wrapper.update();

    expect(wrapper.find(MentionsFormActions).prop("disableSubmit")).toEqual(
      false
    );
  });
});
