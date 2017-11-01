import { React, expect, sinon, mount } from '../../setup';
import CommentForm from '../../../lib/Conversation/CommentForm';
import CommentFormInput from '../../../lib/Conversation/CommentForm/CommentFormInput';
import CommentFormActions from '../../../lib/Conversation/CommentForm/CommentFormActions';
import Avatar from '../../../lib/Avatar/index';

describe('Comment Form', () => {
  let wrapper;
  const sandbox = sinon.sandbox.create();
  let onSubmitSpy;
  let onCancelSpy;

  const props = {
    conversationId: '123',
    author: {
      name: 'Bruce',
      avatar: 'url/of/image'
    }
  };

  beforeEach(() => {
    onSubmitSpy = sandbox.spy();
    onCancelSpy = sandbox.spy();
    wrapper = mount(
      <CommentForm {...props} onSubmit={onSubmitSpy} onCancel={onCancelSpy} />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('sets the initial state', () => {
    expect(wrapper.state('inputValue')).to.equal('');
  });

  it('adds a state class of has-value', () => {
    wrapper.setState({ inputValue: 'test' });
    expect(wrapper.find('form').hasClass('has-value')).to.be.true();

    wrapper.setState({ inputValue: '' });
    expect(wrapper.find('form').hasClass('has-value')).to.be.false();

    wrapper.setProps({ value: 'test' });
    expect(wrapper.find('form').hasClass('has-value')).to.be.true();
  });

  it('sets a focused state', () => {
    expect(wrapper.state('focused')).to.equal(false);
    wrapper.find('textarea').simulate('focus');
    expect(wrapper.state('focused')).to.equal(true);
  });

  it('calls props.onSubmit, sets a submitted state', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).to.be.calledOnce();
    expect(wrapper.state('submitted')).to.equal(true);
  });

  it('calls props.onCancel', () => {
    wrapper.instance().cancelComment();
    expect(onCancelSpy).to.be.calledOnce();
  });

  it('renders an avatar (with the correct props)', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.length(1);
    expect(avatar.prop('src')).to.equal(props.author.avatar);
    expect(avatar.prop('altText')).to.equal(props.author.name);
  });

  it('renders CommentFormInput (with correct props)', () => {
    const input = wrapper.find(CommentFormInput);
    expect(input).to.have.length(1);
    expect(input.prop('handleOnChange')).to.deep.equal(
      wrapper.instance().updateInputValue
    );
    expect(input.prop('onFocus')).to.deep.equal(wrapper.instance().onFocus);
    expect(input.prop('onBlur')).to.deep.equal(wrapper.instance().onBlur);
    expect(input.prop('focusOnMount')).to.equal(false);
    expect(input.prop('value')).to.equal('');

    wrapper.setProps({ value: 'test' });
    expect(input.prop('value')).to.equal('test');
  });

  it('renders CommentFormActions (with correct props)', () => {
    wrapper.setProps({ value: 'test' });
    const actions = wrapper.find(CommentFormActions);
    expect(actions).to.have.length(1);
    expect(actions.prop('onSubmit')).to.deep.equal(wrapper.instance().onSubmit);
    expect(actions.prop('onCancel')).to.deep.equal(
      wrapper.instance().cancelComment
    );
  });

  it('updates the input value', () => {
    wrapper.instance().updateInputValue({ target: { value: 'test 2' } });
    expect(wrapper.state('inputValue')).to.equal('test 2');
  });
});
