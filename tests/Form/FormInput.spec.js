import { React, shallow } from '../setup';
import { FormInput } from '../../lib';

describe('FormInput', () => {
  let wrapper;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    wrapper = shallow(
      <FormInput
        onChange={onChangeSpy}
        value="test value"
        className="test-class"
      >
        <input />
      </FormInput>
    );
  });

  test('renders an input', () => {
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.props()).toEqual({
      type: 'text',
      className: 'form__input test-class',
      value: 'test value',
      onChange: wrapper.instance().handleOnChange,
      autoFocus: false
    });
  });

  test('sets the initial value state to props.value', () => {
    expect(wrapper.state('value')).toEqual('test value');
  });

  test('sets the current value to the targets value', () => {
    wrapper.instance().handleOnChange({ target: { value: 'value 1' } });
    expect(wrapper.state('value')).toEqual('value 1');
  });

  test('sets the correct className', () => {
    expect(wrapper.hasClass('test-class')).toEqual(true);
  });
});
