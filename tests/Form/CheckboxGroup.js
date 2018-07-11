import { React, shallow } from '../setup';
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
  const onChangeSpy = jest.fn();
  const onAddingChoiceSpy = jest.fn();
  const onRemovingChoiceSpy = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CheckboxGroup
        choices={choices}
        onChangeHandler={onChangeSpy}
        onAddingChoice={onAddingChoiceSpy}
        onRemovingChoice={onRemovingChoiceSpy}
      />
    );
  });

  test('can render an array of choices as checkboxes', () => {
    expect(wrapper.find(Checkbox)).toHaveLength(3);
  });

  test('adds a selected choice to internal state and calls onAddingChoice prop with added choice', () => {
    const secondOption = wrapper.find(Checkbox).at(1);
    secondOption.prop('onChangeHandler')({ target: { id: choices[1].id } });
    const {checked, ...addedChoice} = choices[1];
    expect(onAddingChoiceSpy).toHaveBeenCalledWith(addedChoice);
    expect(wrapper.state('selected')).toEqual([
      choices[0],
      choices[2],
      choices[1]
    ]);
  });

  test('removes a selected choice from internal state and calls onRemovingChoice prop with removed choice', () => {
    const firstOption = wrapper.find(Checkbox).at(0);
    firstOption.prop('onChangeHandler')({ target: { id: choices[0].id } });
    expect(onRemovingChoiceSpy).toHaveBeenCalledWith(choices[0]);
    expect(wrapper.state('selected')).toEqual([choices[2]]);
  });
});
