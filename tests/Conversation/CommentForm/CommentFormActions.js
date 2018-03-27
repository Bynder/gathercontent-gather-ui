import { React, mount } from '../../setup';
import CommentFormActions from '../../../lib/Conversation/CommentForm/CommentFormActions';
import Button from '../../../lib/Button/index';

describe('Comment Form Actions', () => {
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;

  const props = {};

  beforeEach(() => {
    onSubmitSpy = jest.fn();
    onCancelSpy = jest.fn();
    wrapper = mount(
      <CommentFormActions
        {...props}
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
      />
    );
  });

  test('renders form actions', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  test('renders a button of type submit', () => {
    const submitButton = wrapper
      .find('.comment-form__actions--submit')
      .find(Button)
      .last();
    expect(submitButton.prop('isSubmit')).toEqual(true);
  });

  test('calls props.onCancel and sets the inputValue to empty', () => {
    wrapper
      .find('.comment-form__actions--submit')
      .find(Button)
      .first()
      .simulate('click');
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('calls props.onCancel and sets the inputValue to empty', () => {
    wrapper
      .find('.comment-form__actions--submit')
      .find(Button)
      .first()
      .simulate('click');
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('does not call props.onSubmit', () => {
    wrapper
      .find('.comment-form__actions--submit')
      .find(Button)
      .last()
      .simulate('click');
    expect(onSubmitSpy).not.toHaveBeenCalled();
  });

  test('adds a state class of is-submitted', () => {
    expect(
      wrapper.find('div.comment-form__actions').hasClass('is-submitting')
    ).toBe(false);

    wrapper.setProps({ isSubmitting: true });
    expect(
      wrapper.find('div.comment-form__actions').hasClass('is-submitting')
    ).toBe(true);
  });

  test('adds an inline class modifier', () => {
    expect(
      wrapper.find('div.comment-form__actions').hasClass('comment-form__actions--inline')
    ).toBe(false);

    wrapper.setProps({ editing: true });
    expect(
      wrapper.find('div.comment-form__actions').hasClass('comment-form__actions--inline')
    ).toBe(true);
  });

  test('adds a loading icon on submit of new conversation', () => {
    expect(wrapper.find('Icon')).toHaveLength(0);
    wrapper.setProps({ isSubmitting: true });
    expect(wrapper.find('Icon')).toHaveLength(1);
  });

  test('adds a conversation meta element class to each action', () => {
    expect(wrapper.find('.conversation__meta')).toHaveLength(0);
    wrapper.setProps({ editing: true });
    expect(wrapper.find('.conversation__meta')).toHaveLength(2);
  });

  test('adds the correct Button types when editing or not', () => {
    expect(wrapper.find(Button).first().prop('types')).toEqual(['link', 'size-sm']);
    expect(wrapper.find(Button).last().prop('types')).toEqual(['primary', 'size-sm']);

    wrapper.setProps({ editing: true });
    expect(wrapper.find(Button).first().prop('types')).toEqual(['collapse', 'link', 'size-sm']);
    expect(wrapper.find(Button).last().prop('types')).toEqual(['collapse', 'link-default', 'size-sm']);
  });
});
