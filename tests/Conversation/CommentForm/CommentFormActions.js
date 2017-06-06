import { React, expect, sinon, mount } from '../../setup';
import CommentFormActions from '../../../lib/Conversation/CommentForm/CommentFormActions';
import Button from '../../../lib/Button/index';

describe('Comment Form Actions', () => {
  let wrapper;
  let sandbox = sinon.sandbox.create();
  let onSubmitSpy;
  let onCancelSpy;

  const props = {};

  beforeEach(() => {
    onSubmitSpy = sandbox.spy();
    onCancelSpy = sandbox.spy();
    wrapper = mount(
      <CommentFormActions
        {...props}
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
      />,
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders form actions', () => {
    expect(wrapper.find(Button)).to.have.length(4);
  });

  it('renders a button of type submit', () => {
    const submitButton = wrapper.find('.comment-form__actions--submit').find(Button).last();
    expect(submitButton.prop('isSubmit')).to.equal(true);
  });

  it('calls props.onCancel and sets the inputValue to empty', () => {
    wrapper.find('.comment-form__actions--submit').find(Button).first().simulate('click');
    expect(onCancelSpy).to.be.called.once;
  });

  it('calls props.onSubmit', () => {
    wrapper.find('.comment-form__actions--submit').find(Button).last().simulate('click');
    expect(onSubmitSpy).to.be.called.once;
  });
});
