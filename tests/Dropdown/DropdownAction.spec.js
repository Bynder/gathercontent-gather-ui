import { React, shallow } from '../setup';
import { Dropdown } from '../../lib';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown';

describe('Dropdown Action', () => {
  const toggleShowContentMock = jest.fn();
  const actionMock = jest.fn();
  const context = {
    [GATHER_UI_DROPDOWN]: {
      toggleShowContent: toggleShowContentMock,
      showContent: false
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown.Action action={actionMock}>Action text</Dropdown.Action>,
      { context }
    );
  });

  test('rendering children', () => {
    expect(wrapper.text()).toBe('Action text');
  });

  test('tabbing when the content is showing', () => {
    expect(wrapper.prop('tabIndex')).toBe(-1);
    wrapper.setContext({
      [GATHER_UI_DROPDOWN]: {
        showContent: true
      }
    });
    expect(wrapper.prop('tabIndex')).toBe(0);
  });

  test('renders all the modifier classes', () => {
    expect(wrapper.hasClass('dropdown__action--danger')).toBe(false);
    wrapper.setProps({ danger: true });
    expect(wrapper.hasClass('dropdown__action--danger')).toBe(true);
    expect(wrapper.hasClass('dropdown__action--noBg')).toBe(false);
    wrapper.setProps({ noBackground: true });
    expect(wrapper.hasClass('dropdown__action--noBg')).toBe(true);
    expect(wrapper.hasClass('dropdown__action--icon-only')).toBe(false);
    wrapper.setProps({ iconOnly: true });
    expect(wrapper.hasClass('dropdown__action--icon-only')).toBe(true);
  });

  test('firing the action prop and toggle context function', () => {
    wrapper.find('button').simulate('click');
    expect(actionMock).toBeCalled();
    expect(toggleShowContentMock).toBeCalled();
  });
});
