import { React, shallow } from '../setup';
import { FormInput } from '../../lib';

describe('FormInput', () => {
  let wrapper;
  let onChangeSpy;

  beforeEach(() => {
    onChangeSpy = jest.fn();
    wrapper = shallow(
      <FormInput
        onInputChange={onChangeSpy}
        value="test value"
        placeholder="test placeholder"
        className="test-class"
      />
    );
  });

  test('renders an input', () => {
    const input = wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.props()).toEqual({
      type: 'text',
      className: 'form__input test-class',
      value: 'test value',
      placeholder: 'test placeholder',
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
    expect(onChangeSpy).toHaveBeenCalledWith('value 1');
  });

  test('sets the correct className', () => {
    expect(wrapper.hasClass('test-class')).toEqual(true);
  });
});
