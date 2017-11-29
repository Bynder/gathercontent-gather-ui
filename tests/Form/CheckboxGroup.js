import { React, expect, sinon, shallow } from '../setup';
import CheckboxGroup from '../../lib/Form/Checkbox/Group';
import Checkbox from '../../lib/Form/Checkbox';

describe('CheckboxGroup', () => {
  let wrapper;
  const choices = [
    {
      name: 'foo',
      id: '123',
      label: 'Option 1',
      checked: true,
      highlight: true
    },
    {
      name: 'foo',
      id: '456',
      label: 'Option 2'
    },
    {
      name: 'foo',
      id: '789',
      label: 'Option 3',
      checked: true
    }
  ];
  const onChangeSpy = sinon.spy();

  beforeEach(() => {
    wrapper = shallow(
      <CheckboxGroup choices={choices} onChangeHandler={onChangeSpy} />
    );
  });

  it('can render an array of choices as checkboxes', () => {
    expect(wrapper.find(Checkbox)).to.have.length(3);
  });

  it('returns all the current selected choices to the onChangeHander when an extra choice is selected', () => {
    const secondOption = wrapper.find(Checkbox).at(1);
    secondOption.prop('onChangeHandler')({ target: { id: '456' } });

    expect(onChangeSpy).to.have.been.calledWith([
      choices[0],
      choices[2],
      choices[1]
    ]);
  });

  it('returns all the current selected choices to the onChangeHander when a choice is deselected', () => {
    const firstOption = wrapper.find(Checkbox).at(0);
    firstOption.prop('onChangeHandler')({ target: { id: '123' } });

    expect(onChangeSpy).to.have.been.calledWith([choices[2]]);
  });

  it('sets a highlightHover state when highlightIsHovered and highlightIsNotHovered are called', () => {
    wrapper.instance().highlightIsHovered();
    expect(wrapper.state().highlightHover).to.equal(true);
    wrapper.instance().highlightIsNotHovered();
    expect(wrapper.state().highlightHover).to.equal(false);
  });
});
