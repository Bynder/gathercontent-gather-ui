import { React, expect, sinon, mount, jsDomGlobal } from '../../setup';
import CommentFormInput from '../../../lib/Conversation/CommentForm/CommentFormInput';

jsDomGlobal();

describe('Comment Form Input', () => {
  let wrapper;
  const sandbox = sinon.sandbox.create();
  let handleOnChangeSpy;

  const props = {};

  beforeEach(() => {
    handleOnChangeSpy = sandbox.spy();
    wrapper = mount(
      <CommentFormInput {...props} handleOnChange={handleOnChangeSpy} />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders a textarea (with the correct props)', () => {
    wrapper.setProps({ value: 'test' });
    const textarea = wrapper.find('textarea');
    expect(textarea).to.have.length(1);
    expect(textarea.prop('value')).to.equal(wrapper.prop('value'));
    expect(textarea.prop('onChange')).to.deep.equal(
      wrapper.prop('handleOnChange')
    );
  });

  it('calls props.handleOnChange when changed', () => {
    wrapper.find('textarea').simulate('change', { target: 'test' });
    expect(handleOnChangeSpy).to.be.calledOnce();
    expect(handleOnChangeSpy.getCall(0).args[0].target).to.deep.equal('test');
  });

  it('adds a state class of is-submitted', () => {
    expect(wrapper.find('textarea').hasClass('is-submitted')).to.be.false();

    wrapper.setProps({ submitted: true });
    expect(wrapper.find('textarea').hasClass('is-submitted')).to.be.true();
  });
});
