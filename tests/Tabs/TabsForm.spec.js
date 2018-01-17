import { React, expect, shallow, sinon } from '../setup';
import { Tabs, Form, FormInput } from '../../lib';

describe('Tabs Form', () => {
  const sandbox = sinon.sandbox.create();
  let wrapper;
  let onSubmitSpy;
  let onCancelSpy;

  beforeEach(() => {
    onSubmitSpy = sandbox.spy();
    onCancelSpy = sandbox.spy();
    wrapper = shallow(
      <Tabs.Form
        onSubmit={onSubmitSpy}
        onCancel={onCancelSpy}
      />
    );
  });

  beforeEach(() => {
    sandbox.restore();
  });

  it('renders a Form & FormInput UI component', () => {
    expect(wrapper.find(Form).prop('escToClose')).to.equal(true);
    expect(wrapper.find(Form).prop('onCancel')).to.deep.equal(onCancelSpy);
    expect(wrapper.find(FormInput).prop('value')).to.equal('');
    expect(wrapper.find(FormInput).prop('focusOnMount')).to.equal(true);
  });

  it('passes the value of the input to props.onSubmit ', () => {
    wrapper.find(Form).prop('onSubmit')({ target: [{ value: 'test value' }] });
    expect(onSubmitSpy).to.be.calledWithExactly('test value');
  });
});
