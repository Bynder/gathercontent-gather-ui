import { React, mount } from "../setup";
import MentionsFormActions from "../../lib/MentionsForm/MentionsFormActions";
import Button from "../../lib/Button/index";

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

  beforeEach(() => {
    onSubmitSpy = jest.fn();

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

  test("renders form actions", () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  test("renders a button of type submit", () => {
    const submitButton = wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .last();

    expect(submitButton.prop("isSubmit")).toEqual(true);
  });

  test("calls props.onCancel and sets the inputValue to empty", () => {
    wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .first()
      .simulate("click");

    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test("calls props.onCancel and sets the inputValue to empty", () => {
    wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .first()
      .simulate("click");

    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test("does not call props.onSubmit", () => {
    wrapper
      .find(".mention-form__actions--submit")
      .find(Button)
      .last()
      .simulate("click");

    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  test("adds an inline class modifier", () => {
    expect(
      wrapper
        .find("div.mention-form__actions")
        .hasClass("mention-form__actions--inline")
    ).toBe(false);

    wrapper.setProps({ editing: true });

    expect(
      wrapper
        .find("div.mention-form__actions")
        .hasClass("mention-form__actions--inline")
    ).toBe(true);
  });

  test("adds a conversation meta element class to each action", () => {
    expect(wrapper.find(".conversation__meta")).toHaveLength(0);
    wrapper.setProps({ editing: true });
    wrapper.update();

    expect(wrapper.find(".conversation__meta").hostNodes()).toHaveLength(2);
  });

  test("adds the correct Button types when editing or not", () => {
    expect(wrapper.find(Button).first().prop("types")).toEqual([
      "link",
      "size-sm",
    ]);

    expect(wrapper.find(Button).last().prop("types")).toEqual([
      "primary",
      "size-sm",
    ]);

    wrapper.setProps({ editing: true });

    expect(wrapper.find(Button).first().prop("types")).toEqual([
      "collapse",
      "link",
      "size-sm",
    ]);

    expect(wrapper.find(Button).last().prop("types")).toEqual([
      "collapse",
      "link-default",
      "size-sm",
    ]);
  });

  test("displays the mention count", () => {
    expect(wrapper.find(Button).last().render().text()).toEqual("Submit");
    wrapper.setProps({ displayMentionCount: true, mentionCount: 4 });

    expect(wrapper.find(Button).last().render().text()).toEqual(
      "Submit & notify 4 people"
    );
    wrapper.setProps({ mentionCount: 1 });

    expect(wrapper.find(Button).last().render().text()).toEqual(
      "Submit & notify 1 person"
    );
  });
});
