import { React, expect, shallow, sinon } from '../setup';
import { Form } from '../../lib';

describe('Form', () => {
  const sandbox = sinon.sandbox.create();
  let onSubmitSpy;
  let onCancelSpy;
  let wrapper;

  beforeEach(() => {
    onSubmitSpy = sandbox.spy();
    onCancelSpy = sandbox.spy();
    wrapper = shallow(
      <Form onSubmit={onSubmitSpy} onCancel={onCancelSpy} className="test">
        <input />
      </Form>
    );
  });

  beforeEach(() => {
    sandbox.restore();
  });

  it('renders children', () => {
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('calls props.onSubmit when submitting', () => {
    const preventDefaultSpy = sandbox.spy();
    const event = { preventDefault: preventDefaultSpy };
    wrapper.find('form').prop('onSubmit')(event);
    expect(onSubmitSpy).to.be.calledWithExactly(event);
    expect(preventDefaultSpy).to.be.calledOnce();
  });

  it('calls onCancel with the esc key', () => {
    wrapper.instance().handleKeyDown({ keyCode: 27 });
    expect(onCancelSpy).to.not.be.called();

    wrapper.setProps({ escToClose: true });
    wrapper.instance().handleKeyDown({ keyCode: 27 });
    expect(onCancelSpy).to.be.calledOnce();
  });

  it('renders the classNames', () => {
    expect(wrapper.hasClass('test')).to.equal(true);
  });
});
