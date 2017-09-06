import { React, expect, sinon, jsDomGlobal, shallow, mount } from '../setup';
import RadioButtonOther from '../../lib/Form/RadioButton/Other';
import RadioButtonInput from '../../lib/Form/RadioButton/Input';
import Label from '../../lib/Form/Label';

jsDomGlobal();

describe('RadioButtonOther', () => {
  let Other;

  beforeEach(() => {
    Other = shallow(<RadioButtonOther
      name="foo"
      id="4"
      label="Something else"
    />);
  });

  it('has a radio button input', () => {
    expect(Other.find(RadioButtonInput)).to.have.length(1);
  });

  it('has a label', () => {
    expect(Other.find(Label)).to.have.length(1);
  });

  it('has a text input, if it is checked', () => {
    Other.setProps({ checked: true });
    expect(Other.find('input[type="text"]')).to.have.length(1);
  });

  it('hides the user input field if it is not checked', () => {
    expect(Other.find('input[type="text"]')).to.have.length(0);
  });

  it('uses the "value" prop to set the initial value of the user input field', () => {
    Other = shallow(<RadioButtonOther
      name="foo"
      id="4"
      label="Something else"
      checked
      value="the initial value"
    />);

    expect(Other.find('input').props().value).to.equal('the initial value');
  });

  it('returns the id to the onChangeHandler when it is checked', () => {
    const onChangeSpy = sinon.spy();
    const e = { target: { id: 4 } };

    Other = shallow(<RadioButtonOther
      name="foo"
      id="4"
      label="Something else"
      value="the initial value"
      onChangeHandler={onChangeSpy}
    />);

    Other.find(RadioButtonInput).prop('onChangeHandler')(e);

    expect(onChangeSpy).to.have.been.calledWith(e);
  });

  it('returns the user input value to the onTextChange handler', () => {
    const onTextChangeSpy = sinon.spy();

    Other = shallow(<RadioButtonOther
      name="foo"
      id="4"
      label="Something else"
      value="the initial value"
      checked
      onTextChangeHandler={onTextChangeSpy}
    />);

    Other.find('input[type="text"]').simulate('change', { target: { value: 'new input' } });

    expect(onTextChangeSpy).to.have.been.calledWith({ target: { value: 'new input' } });
  });
});
