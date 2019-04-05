import { React, shallow } from '../setup';
import { Dropdown, Button } from '../../lib';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown';

describe('Dropdown Trigger', () => {
  let toggleShowContentMock;
  let wrapper;

  beforeEach(() => {
    toggleShowContentMock = jest.fn();
    const context = {
      [GATHER_UI_DROPDOWN]: {
        toggleShowContent: toggleShowContentMock
      }
    };

    wrapper = shallow(<Dropdown.Trigger>Trigger text</Dropdown.Trigger>, {
      context
    });
  });

  test('rendering a button', () => {
    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(toggleShowContentMock).toBeCalled();
  });

  test('rendering a Button component as the trigger', () => {
    wrapper.setProps({ useButton: true });
    const { types, onClick } = wrapper.find(Button).props();
    onClick();
    expect(types).toEqual(['primary']);
    expect(toggleShowContentMock).toHaveBeenCalledTimes(1);
  });

  test('rendering a select like trigger', () => {
    wrapper.setProps({ useSelect: true });
    const { types } = wrapper.find(Button).props();
    expect(types).toEqual(['outline']);
  });
});
