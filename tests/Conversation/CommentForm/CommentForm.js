import { React, expect, sinon, mount } from '../../setup';
import CommentForm from '../../../lib/Conversation/CommentForm';
import ExpandingTextArea from '../../../lib/ExpandingTextArea';
import CommentFormActions from '../../../lib/Conversation/CommentForm/CommentFormActions';
import Avatar from '../../../lib/Avatar/index';
import ShortcutTrigger from '../../../lib/ShortcutTrigger/index';

describe('Comment Form', () => {
  let wrapper;
  const sandbox = sinon.sandbox.create();
  let onSubmitSpy;
  let onCancelSpy;
  let onCommentChangeSpy;

  const props = {
    id: '123',
    isSubmitting: false,
    author: {
      name: 'Bruce',
      avatar: 'url/of/image',
      initials: 'BB'
    }
  };

  beforeEach(() => {
    onSubmitSpy = sandbox.spy();
    onCancelSpy = sandbox.spy();
    onCommentChangeSpy = sandbox.spy();
    wrapper = mount(
      <CommentForm
        {...props}
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
        onCommentChange={onCommentChangeSpy}
      />
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

  it('calls props.onSubmit', () => {
    wrapper.find('form').simulate('submit');
    expect(onSubmitSpy).to.be.calledOnce();
  });

  it('calls props.onCancel', () => {
    wrapper.instance().cancelComment();
    expect(onCancelSpy).to.be.calledOnce();
  });

  it('renders an avatar (with the correct props)', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.length(1);
    expect(avatar.prop('url')).to.equal(props.author.avatar);
    expect(avatar.prop('initials')).to.equal(props.author.initials);
  });

  it('renders ExpandingTextArea (with correct props)', () => {
    const input = wrapper.find(ExpandingTextArea);
    expect(input).to.have.length(1);
    expect(input.prop('handleOnChange')).to.deep.equal(
      wrapper.instance().updateInputValue
    );
    expect(input.prop('focusOnMount')).to.equal(false);
    expect(input.prop('value')).to.equal('');

    wrapper.setProps({ value: 'test' });
    expect(input.prop('value')).to.equal('test');

    expect(input.prop('handleOnFocus')).to.deep.equal(
      wrapper.instance().toggleInputHasFocus
    );
  });

  it('renders CommentFormActions (with correct props)', () => {
    wrapper.setProps({ value: 'test' });
    let actions = wrapper.find(CommentFormActions);
    expect(actions).to.have.length(1);
    expect(actions.prop('onSubmit')).to.deep.equal(wrapper.instance().onSubmit);
    expect(actions.prop('onCancel')).to.deep.equal(
      wrapper.instance().cancelComment
    );
    expect(actions.prop('isSubmitting')).to.equal(false);

    wrapper.setProps({ isSubmitting: true });
    actions = wrapper.find(CommentFormActions);
    expect(actions.prop('isSubmitting')).to.equal(true);
  });

  it('updates the input value', () => {
    wrapper.instance().updateInputValue({ target: { value: 'test 2' } });
    expect(wrapper.state('inputValue')).to.equal('test 2');
    expect(onCommentChangeSpy).to.be.calledWithExactly('123', 'test 2');
  });

  it('toggles the focus state for the input', () => {
    wrapper.instance().toggleInputHasFocus();
    expect(wrapper.state('inputHasFocused')).to.equal(true);

    wrapper.instance().toggleInputHasFocus();
    expect(wrapper.state('inputHasFocused')).to.equal(false);
  });

  it('renders ShortcutTriggers', () => {
    expect(wrapper.find(ShortcutTrigger)).to.have.length(0);
    wrapper.setState({ inputHasFocused: true });
    const shortcutTriggers = wrapper.find(ShortcutTrigger);
    expect(shortcutTriggers).to.have.length(2);

    expect(shortcutTriggers.first().prop('shortcutKey')).to.equal('Enter');
    expect(shortcutTriggers.first().prop('onShortcutTrigger')).to.deep.equal(
      wrapper.instance().onSubmit
    );
    expect(shortcutTriggers.first().prop('withCtrlKey')).to.equal(true);

    expect(shortcutTriggers.last().prop('shortcutKey')).to.equal('Enter');
    expect(shortcutTriggers.last().prop('onShortcutTrigger')).to.deep.equal(
      wrapper.instance().onSubmit
    );
    expect(shortcutTriggers.last().prop('withMetaKey')).to.equal(true);
  });
});
