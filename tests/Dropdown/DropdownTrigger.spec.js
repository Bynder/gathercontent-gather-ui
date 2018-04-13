import { React, shallow } from '../setup';
import { Dropdown, Button } from '../../lib';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown';

describe('Dropdown Trigger', () => {
  const toggleShowContentMock = jest.fn();
  const context = {
    [GATHER_UI_DROPDOWN]: {
      toggleShowContent: toggleShowContentMock
    }
  };
  let wrapper;

  beforeEach(() => {
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
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
    button.prop('clickHandler')();
    expect(toggleShowContentMock).toBeCalled();
  });
});
