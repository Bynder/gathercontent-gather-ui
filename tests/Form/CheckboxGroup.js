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

  beforeEach(() => {
    wrapper = shallow(
      <CheckboxGroup choices={choices} onChangeHandler={onChangeSpy} />
    );
  });

  test('can render an array of choices as checkboxes', () => {
    expect(wrapper.find(Checkbox)).toHaveLength(3);
  });

  test('returns all the current selected choices to the onChangeHander when an extra choice is selected', () => {
    const secondOption = wrapper.find(Checkbox).at(1);
    secondOption.prop('onChangeHandler')({ target: { id: '456' } });

    expect(onChangeSpy).toHaveBeenCalledWith([
      choices[0],
      choices[2],
      choices[1]
    ]);
  });

  test('returns all the current selected choices to the onChangeHander when a choice is deselected', () => {
    const firstOption = wrapper.find(Checkbox).at(0);
    firstOption.prop('onChangeHandler')({ target: { id: '123' } });

    expect(onChangeSpy).toHaveBeenCalledWith([choices[2]]);
  });
});
