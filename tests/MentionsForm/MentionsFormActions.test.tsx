import { React, mount } from "../setup";
import MentionsFormActions from "../../lib/MentionsForm/MentionsFormActions";
import Button from "../../lib/Button/index";

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe("Mention Form Actions", () => {
  let wrapper: any;
  let onSubmitSpy: any;
  let onCancelSpy: any;

  const props = {
    disableSubmit: false,
    cancelText: "Cancel",
    submitText: "Submit",
    mentionCount: 0,
    displayMentionCount: false,
  };

  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onSubmitSpy = jest.fn();
    // @ts-expect-error TS(2708): Cannot use namespace 'jest' as a value.
    onCancelSpy = jest.fn();
    wrapper = mount(
      <MentionsFormActions
        {...props}
        // @ts-expect-error TS(2304): Cannot find name 'onSubmit'.
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
      />
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders form actions", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("renders a button of type submit", () => {
    const submitButton = wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .last();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(submitButton.prop("isSubmit")).toEqual(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls props.onCancel and sets the inputValue to empty", () => {
    wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .first()
      .simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("calls props.onCancel and sets the inputValue to empty", () => {
    wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .first()
      .simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("does not call props.onSubmit", () => {
    wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .last()
      .simulate("click");
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds an inline class modifier", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper
        .find("div.mention-form__actions")
        .hasClass("mention-form__actions--inline")
    ).toBe(false);

    wrapper.setProps({ editing: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(
      wrapper
        .find("div.mention-form__actions")
        .hasClass("mention-form__actions--inline")
    ).toBe(true);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds a conversation meta element class to each action", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".conversation__meta")).toHaveLength(0);
    wrapper.setProps({ editing: true });
    wrapper.update();
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(".conversation__meta").hostNodes()).toHaveLength(2);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("adds the correct Button types when editing or not", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).first().prop("types")).toEqual([
      "link",
      "size-sm",
    ]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).last().prop("types")).toEqual([
      "primary",
      "size-sm",
    ]);

    wrapper.setProps({ editing: true });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).first().prop("types")).toEqual([
      "collapse",
      "link",
      "size-sm",
    ]);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).last().prop("types")).toEqual([
      "collapse",
      "link-default",
      "size-sm",
    ]);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test("displays the mention count", () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).last().render().text()).toEqual("Submit");
    wrapper.setProps({ displayMentionCount: true, mentionCount: 4 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).last().render().text()).toEqual(
      "Submit & notify 4 people"
    );
    wrapper.setProps({ mentionCount: 1 });
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(Button).last().render().text()).toEqual(
      "Submit & notify 1 person"
    );
  });
});
