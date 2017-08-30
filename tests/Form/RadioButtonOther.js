import { React, expect, sinon, jsDomGlobal, shallow } from '../setup';
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

  it('has a label', () => {
    expect(Other.find(Label)).to.have.length(1);
  });

  it('hides the user input field if it is not checked', () => {
    expect(Other.find('input')).to.have.length(0);
  });

  it('shows the user input field if it is checked', () => {
    Other = shallow(<RadioButtonOther
      name="foo"
      id="4"
      label="Something else"
      checked
    />);

    expect(Other.find('input')).to.have.length(1);
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

  it('returns the user input value to the onChange handler', () => {
    const onChangeSpy = sinon.spy();

    Other = shallow(<RadioButtonOther
      name="foo"
      id="4"
      label="Something else"
      value="the initial value"
      checked
      onChangeHandler={onChangeSpy}
    />);

    Other.find('input').simulate('change', { target: { value: 'new input' } });

    expect(onChangeSpy).to.have.been.calledWith('new input');
  });
});
