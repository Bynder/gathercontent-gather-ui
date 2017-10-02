import assign from 'object-assign';
import { React, expect, sinon, shallow } from '../setup';
import RadioButtonGroup from '../../lib/Form/RadioButton/Group';
import RadioButton from '../../lib/Form/RadioButton';
import RadioButtonOther from '../../lib/Form/RadioButton/Other';

describe('RadioButtonGroup', () => {
  let wrapper;
  const choices = [
    {
      name: 'foo',
      label: 'First choice',
      id: '123'
    },
    {
      name: 'foo',
      label: 'Second choice',
      id: '456'
    }
  ];
  const otherChoice = {
    name: 'foo',
    label: 'Enter your option',
    id: '789',
    other_option: true
  };
  const choicesWithOtherChoice = choices.concat(otherChoice);
  const onChangeSpy = sinon.spy();

  beforeEach(() => {
    wrapper = shallow(
      <RadioButtonGroup choices={choices} onChangeHandler={onChangeSpy} />
    );
  });

  it('can render a list of choices as a radio button group', () => {
    expect(wrapper.find(RadioButton)).to.have.length(2);
  });

  it('can have an other option', () => {
    wrapper = shallow(
      <RadioButtonGroup
        choices={choicesWithOtherChoice}
        onChangeHandler={onChangeSpy}
      />
    );

    expect(wrapper.find(RadioButtonOther)).to.have.length(1);
  });

  it('returns the selected options onChange', () => {
    const firstOption = wrapper.find(RadioButton).at(0);
    const secondOption = wrapper.find(RadioButton).at(1);

    firstOption.prop('onChangeHandler')({ target: { id: '123' } });
    expect(onChangeSpy).to.have.been.calledWith([choices[0]]);

    secondOption.prop('onChangeHandler')({ target: { id: '456' } });
    expect(onChangeSpy).to.have.been.calledWith([choices[1]]);
  });

  it('returns the selected options when the other option value changes', () => {
    wrapper = shallow(
      <RadioButtonGroup
        choices={choicesWithOtherChoice}
        onChangeHandler={onChangeSpy}
      />
    );
    const otherOption = wrapper.find(RadioButtonOther);
    otherOption.prop('onTextChangeHandler')({ target: { value: 'Hello' } });

    const expectedOptionChoice = assign({}, otherChoice, { value: 'Hello' });

    expect(onChangeSpy).to.have.been.calledWith([expectedOptionChoice]);
  });
});
