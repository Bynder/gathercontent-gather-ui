import { FormModal, Modal, ProgressButton, Button } from '../../lib';
import { React, mount } from '../setup';

describe('FormModal', () => {
  let modal;
  const handleSubmitSpy = jest.fn();

  beforeEach(() => {
    modal = mount(
      <FormModal
        title="Foo"
        submitText="Go"
        cancelText="Stop"
        submitHandler={handleSubmitSpy}
      >
        <input />
      </FormModal>
    );
  });

  test('has a title', () => {
    expect(
      modal
        .find(Modal.Container)
        .find('form')
        .find(Modal.Header)
        .text()
    ).toEqual('Foo');
  });

  test('has a submit button', () => {
    expect(modal.find(ProgressButton).text()).toEqual('Go');
  });

  test('has a cancel button', () => {
    expect(modal.find(Button).text()).toEqual('Stop');
  });

  test('it renders the child form elements', () => {
    expect(modal.find('input').length).toEqual(1);
  });

  test('shows a progress button with a spinner when formIsSubmitting is true', () => {});
});
