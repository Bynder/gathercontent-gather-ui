import { React, expect, sinon, jsDomGlobal, shallow, mount } from '../setup';
import RadioButtonOther from '../../lib/Form/RadioButton/Other';
import RadioButtonInput from '../../lib/Form/RadioButton/Input';
import Label from '../../lib/Form/Label';

jsDomGlobal();

describe('RadioButtonOther', () => {
  let Other;
  const onChangeHandler = () => 'onChangeHandler';

  beforeEach(() => {
    Other = shallow(
      <RadioButtonOther
        name="foo"
        id="4"
        label="Something else"
        onChangeHandler={onChangeHandler}
        onTextChangeHandler={() => {}}
      />
    );
  });

  it('has a radio button input', () => {
    let Input = Other.find(RadioButtonInput);
    expect(Input.prop('name')).to.equal('foo');
    expect(Input.prop('id')).to.equal('4');
    expect(Input.prop('onChangeHandler')).to.deep.equal(onChangeHandler);

    Other.setProps({ checked: true });

    Input = Other.find(RadioButtonInput);
    expect(Input.prop('name')).to.equal('foo');
    expect(Input.prop('id')).to.equal('4');
    expect(Input.prop('onChangeHandler')).to.deep.equal(onChangeHandler);
  });

  it('has a label', () => {
    const label = Other.find(Label);
    expect(label.prop('label')).to.equal('Something else');
    expect(label.prop('id')).to.equal('4');
  });

  it('does not render the label', () => {
    Other.setProps({ checked: true });
    expect(Other.find(Label)).to.have.length(0);
  });

  it('has a text input, if it is checked', () => {
    Other.setProps({ checked: true });
    expect(Other.find('input[type="text"]')).to.have.length(1);
  });

  it('hides the user input field if it is not checked', () => {
    expect(Other.find('input[type="text"]')).to.have.length(0);
  });

  it('uses the "value" prop to set the initial value of the user input field', () => {
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

    expect(Other.find('input[type="text"]').props().value).to.equal(
      'the initial value'
    );
  });

  it('returns the id to the onChangeHandler when it is checked', () => {
    const onChangeSpy = sinon.spy();
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
    expect(onChangeSpy).to.have.been.calledWith(e);
  });

  it('returns the user input value to the onTextChange handler', () => {
    const onTextChangeSpy = sinon.spy();

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
    expect(onTextChangeSpy).to.have.been.calledWith({
      target: { value: 'new input' }
    });
  });

  it('focuses the input element', () => {
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

    expect(mountedWrapper.instance().input).to.not.equal(
      document.activeElement
    );
    mountedWrapper.setProps({ checked: true });
    expect(mountedWrapper.instance().input).to.deep.equal(
      document.activeElement
    );
  });
});
