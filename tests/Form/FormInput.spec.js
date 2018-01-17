import { React, expect, shallow, sinon } from '../setup';
import { FormInput } from '../../lib';

describe('FormInput', () => {
  const sandbox = sinon.sandbox.create();
  let wrapper;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = sandbox.spy();
    wrapper = shallow(
      <FormInput onChange={onChangeSpy} value="test value">
        <input />
      </FormInput>
    );
  });

  beforeEach(() => {
    sandbox.restore();
  });

  it('renders an input', () => {
    const input = wrapper.find('input');
    expect(input).to.have.length(1);
    expect(input.props()).to.deep.equal({
      type: 'text',
      value: 'test value',
      onChange: wrapper.instance().handleOnChange,
      autoFocus: false
    });
  });

  it('sets the initial value state to props.value', () => {
    expect(wrapper.state('value')).to.equal('test value');
  });

  it('sets the current value to the targets value', () => {
    wrapper.instance().handleOnChange({ target: { value: 'value 1' } });
    expect(wrapper.state('value')).to.equal('value 1');
  });
});
