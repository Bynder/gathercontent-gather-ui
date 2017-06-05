import { React, expect, sinon, mount, jsDomGlobal } from '../../setup';
import CommentForm from '../../../lib/Conversation/CommentForm';
import CommentFormInput from '../../../lib/Conversation/CommentForm/CommentFormInput';
import CommentFormActions from '../../../lib/Conversation/CommentForm/CommentFormActions';
import Avatar from '../../../lib/Avatar/index';
import Button from '../../../lib/Button/index';

describe('Comment Form', () => {
  let wrapper;
  let sandbox = sinon.sandbox.create();
  let onSubmitSpy;
  let onCancelSpy;

  const props = {
    conversationId: '123',
    user: {
      name: 'Bruce',
      avatar: 'url/of/image',
    }
  };

  beforeEach(() => {
    onSubmitSpy = sandbox.spy();
    onCancelSpy = sandbox.spy();
    wrapper = mount(
      <CommentForm
        {...props}
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
      />,
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('sets the initial state based on props.value', () => {
    expect(wrapper.state('inputValue')).to.equal('');
  });

  it('calls props.onSubmit when submitted', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).to.be.called.once;
  });

  it('calls props.onCancel', () => {
    wrapper.instance().cancelComment();
    expect(onCancelSpy).to.be.called.once;
  });

  it('adds a BEM modifier of has-value', () => {
    wrapper.setState({ inputValue: 'test' });
    expect(wrapper.find('form').hasClass('form--has-value')).to.be.true;

    wrapper.setState({ inputValue: '' });
    expect(wrapper.find('form').hasClass('form--has-value')).to.be.false;

    wrapper.setProps({ value: 'test' });
    expect(wrapper.find('form').hasClass('form--has-value')).to.be.true;
  });

  it('renders an avatar (with the correct props)', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.length(1);
    expect(avatar.prop('src')).to.equal(props.user.avatar);
    expect(avatar.prop('altText')).to.equal(props.user.name);
  });

  it('renders CommentFormInput (with correct props)', () => {
    const input = wrapper.find(CommentFormInput);
    expect(input).to.have.length(1);
    expect(input.prop('handleOnChange')).to.deep.equal(wrapper.instance().updateInputValue);
    expect(input.prop('focusOnMount')).to.equal(false);
    expect(input.prop('value')).to.equal('');
  });

  it('renders CommentFormActions (with correct props)', () => {
    const actions = wrapper.find(CommentFormActions);
    expect(actions).to.have.length(1);
    expect(actions.prop('onSubmit')).to.deep.equal(wrapper.instance().onSubmit);
    expect(actions.prop('onCancel')).to.deep.equal(wrapper.instance().cancelComment);
  });

  it('updates the input value', () => {
    wrapper.instance().updateInputValue({ target: { value: 'test 2' } });
    expect(wrapper.state('inputValue')).to.equal('test 2');
  });
});
