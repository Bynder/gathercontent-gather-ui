import { React, shallow, mount } from '../setup';
import RadioButtonOther from '../../lib/Form/RadioButton/Other';
import RadioButtonInput from '../../lib/Form/RadioButton/Input';
import Label from '../../lib/Form/Label';

describe('RadioButtonOther', () => {
  let Other;
  const onChangeHandler = () => 'onChangeHandler';

  beforeEach(() => {
    Other = mount(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        onChangeHandler={onChangeHandler}
        onTextChangeHandler={() => {}}
      />
    );
  });

  test('has a radio button input', () => {
    let Input = Other.find(RadioButtonInput);
    expect(Input.prop('name')).toEqual('foo');
    expect(Input.prop('id')).toEqual('4');
    expect(Input.prop('onChangeHandler')).toEqual(onChangeHandler);

    Other.setProps({ checked: true });

    Input = Other.find(RadioButtonInput);
    expect(Input.prop('name')).toEqual('foo');
    expect(Input.prop('id')).toEqual('4');
    expect(Input.prop('onChangeHandler')).toEqual(onChangeHandler);
  });

  test('has a label', () => {
    const label = Other.find(Label);
    expect(label.prop('label')).toEqual('Something else');
    expect(label.prop('id')).toEqual('4');
  });

  test('does not render the label', () => {
    Other.setProps({ checked: true });
    expect(Other.find(Label)).toHaveLength(0);
  });

  test('has a text input, if it is checked', () => {
    Other.setProps({ checked: true });
    expect(Other.find('input[type="text"]')).toHaveLength(1);
  });

  test('hides the user input field if it is not checked', () => {
    expect(Other.find('input[type="text"]')).toHaveLength(0);
  });

  test('uses the "value" prop to set the initial value of the user input field', () => {
    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        checked
        value="the initial value"
        onChangeHandler={() => {}}
        onTextChangeHandler={() => {}}
      />
    );

    expect(Other.find('input[type="text"]').props().value).toEqual(
      'the initial value'
    );
  });

  test('returns the id to the onChangeHandler when it is checked', () => {
    const onChangeSpy = jest.fn();
    const e = { target: { id: 4 } };

    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        onChangeHandler={onChangeSpy}
        onTextChangeHandler={() => {}}
      />
    );

    Other.find(RadioButtonInput).prop('onChangeHandler')(e);
    expect(onChangeSpy).toHaveBeenCalledWith(e);
  });

  test('returns the user input value to the onTextChange handler', () => {
    const onTextChangeSpy = jest.fn();

    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        checked
        onTextChangeHandler={onTextChangeSpy}
        onChangeHandler={() => {}}
      />
    );

    Other.find('input[type="text"]').simulate('change', {
      target: { value: 'new input' }
    });
    expect(onTextChangeSpy).toHaveBeenCalledWith({
      target: { value: 'new input' }
    });
  });

  test('focuses the input element', () => {
    const mountedWrapper = mount(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        onTextChangeHandler={() => {}}
        onChangeHandler={() => {}}
      />
    );

    expect(mountedWrapper.instance().input).not.toEqual(document.activeElement);
    mountedWrapper.setProps({ checked: true });
    expect(mountedWrapper.instance().input).toEqual(document.activeElement);
  });

  test('renders a span instead of input when disabled', () => {
    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        value="the initial value"
        checked
        onTextChangeHandler={() => {}}
        onChangeHandler={() => {}}
      />
    );

    expect(Other.find('input[type="text"]')).toHaveLength(1);
    Other.setProps({ disabled: true });
    expect(Other.find('input[type="text"]')).toHaveLength(0);
    expect(Other.find('span')).toHaveLength(1);
  });
});
