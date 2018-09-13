import { React, mount } from '../setup';
import TagUserFormActions from '../../lib/TagUserForm/TagUserFormActions';
import Button from '../../lib/Button/index';

describe('Tag User Form Actions', () => {
  let wrapper;
  let onCancelSpy;

  beforeEach(() => {
    onCancelSpy = jest.fn();
    wrapper = mount(
      <TagUserFormActions onCancel={onCancelSpy} disableSubmit />
    );
  });

  test('renders form actions', () => {
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  test('renders a button of type submit', () => {
    const submitButton = wrapper
      .find('.taguser-form__actions--submit')
      .find(Button)
      .last();
    expect(submitButton.prop('isSubmit')).toEqual(true);
  });

  test('cancel button calls props.onCancel', () => {
    wrapper
      .find('.taguser-form__actions--submit')
      .find(Button)
      .first()
      .simulate('click');
    expect(onCancelSpy).toHaveBeenCalledTimes(1);
  });

  test('disables the submit button', () => {
    let submitButton = wrapper
      .find('.taguser-form__actions--submit')
      .find(Button)
      .last();
    expect(submitButton.prop('disabled')).toEqual(true);
    wrapper.setProps({ disableSubmit: false });
    submitButton = wrapper
      .find('.taguser-form__actions--submit')
      .find(Button)
      .last();
    expect(submitButton.prop('disabled')).toEqual(false);
  });
});
