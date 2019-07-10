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
      autoFocus: false,
      'aria-invalid': false,
      disabled: false
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
    expect(wrapper.find('input').hasClass('test-class')).toEqual(true);
  });

  test('adds the has-error class and displays the error message', () => {
    expect(wrapper.find('input').hasClass('form__input--has-error')).toEqual(
      false
    );
    wrapper.setProps({ hasError: true });
    expect(wrapper.find('input').hasClass('form__input--has-error')).toEqual(
      true
    );
    expect(wrapper.find('.form-input__error-message')).toHaveLength(0);
    expect(
      wrapper.find('input').hasClass('form__input--display-error')
    ).toEqual(false);
    wrapper.setProps({ errorMessage: 'oooooops' });
    expect(
      wrapper.find('input').hasClass('form__input--display-error')
    ).toEqual(true);
    expect(wrapper.find('.form-input__error-message')).toHaveLength(1);
  });
});
