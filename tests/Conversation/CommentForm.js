import { React, expect, sinon, mount } from '../setup';
import CommentForm from '../../lib/Conversation/CommentForm';
import Avatar from '../../lib/Avatar';
import Button from '../../lib/Button';

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

  it('renders an avatar (with the correct props)', () => {
    const avatar = wrapper.find(Avatar);
    expect(avatar).to.have.length(1);
    expect(avatar.prop('src')).to.equal(props.user.avatar);
    expect(avatar.prop('altText')).to.equal(props.user.name);
  });

  it('renders a textarea (with the correct props)', () => {
    wrapper.setProps({ useTextArea: true });
    wrapper.setState({ inputValue: 'test' });
    const textarea = wrapper.find('textarea');
    expect(textarea).to.have.length(1);
    expect(textarea.prop('value')).to.equal(wrapper.state('inputValue'));
    expect(textarea.prop('onChange')).to.deep.equal(wrapper.instance().updateInputValue);
  });

  it('renders an input (with the correct props)', () => {
    wrapper.setProps({ useTextArea: false });
    wrapper.setState({ inputValue: '' });
    const input = wrapper.find('input');
    expect(input).to.have.length(1);
    expect(input.prop('value')).to.equal('');
    expect(input.prop('onChange')).to.deep.equal(wrapper.instance().updateInputValue);
  });

  it('renders some form actions when inputValue is empty', () => {
    wrapper.setState({ inputValue: '' });
    expect(wrapper.find(Button)).to.have.length(2);
  });

  it('renders submit action when the input value is not empty', () => {
    wrapper.setState({ inputValue: 'test' });
    expect(wrapper.find(Button)).to.have.length(4);
  });

  it('calls props.onCancel and sets the inputValue to empty', () => {
    wrapper.setState({ inputValue: 'test' });
    wrapper.find('.form__actions').children().find('.form__actions').find(Button).first().simulate('click');
    expect(onCancelSpy).to.be.called.once;
    expect(wrapper.state('inputValue')).to.equal('');
  });

  it('calls props.onSubmit', () => {
    wrapper.setState({ inputValue: 'test' });
    wrapper.find('.form__actions').children().find('.form__actions').find(Button).last().simulate('click');
    expect(onSubmitSpy).to.be.called.once;
    expect(onSubmitSpy.getCall(0).args[0]).to.equal('test');
  });

  it('updates the input value', () => {
    wrapper.find('input').simulate('change', { target: { value: 'test 2' } });
    expect(wrapper.state('inputValue')).to.equal('test 2');
  });
});
