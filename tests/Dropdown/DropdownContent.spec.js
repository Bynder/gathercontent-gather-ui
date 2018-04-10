import { React, shallow } from '../setup';
import { Dropdown } from '../../lib';
import { GATHER_UI_DROPDOWN } from '../../lib/Dropdown';

describe('Dropdown Content', () => {
  const context = {
    [GATHER_UI_DROPDOWN]: {
      showContent: false
    }
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dropdown.Content>Content text</Dropdown.Content>, {
      context
    });
  });

  test('rendering children', () => {
    expect(wrapper.text()).toBe('Content text');
  });

  test('rendering all modifiers', () => {
    wrapper.setContext({
      [GATHER_UI_DROPDOWN]: {
        showContent: true
      }
    });
    expect(wrapper.hasClass('is-active')).toBe(true);

    wrapper.setProps({ collapse: true });
    expect(wrapper.hasClass('dropdown__content--collapse')).toBe(true);

    wrapper.setProps({ right: true });
    expect(wrapper.hasClass('dropdown__content--right')).toBe(true);

    wrapper.setProps({ centre: true });
    expect(wrapper.hasClass('dropdown__content--centre')).toBe(true);

    wrapper.setProps({ top: true });
    expect(wrapper.hasClass('dropdown__content--top')).toBe(true);
  });

  test('passing a function as a child to create a render prop', () => {
    const childMock = jest.fn();
    wrapper.setProps({ children: childMock });
    expect(childMock).toBeCalledWith(false);
    wrapper.setContext({
      [GATHER_UI_DROPDOWN]: {
        showContent: true
      }
    });
    expect(childMock).toBeCalledWith(true);
  });
});
