import { React, shallow } from '../setup';
import { Dropdown } from '../../lib';

describe('Dropdown Action Group', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown.ActionGroup>Action group text</Dropdown.ActionGroup>
    );
  });

  test('rendering all modifiers', () => {
    wrapper.setProps({ horizontal: true });
    expect(wrapper.hasClass('dropdown__action-group--horizontal')).toBe(true);
  });

  test('rendering children', () => {
    expect(wrapper.text()).toBe('Action group text');
  });
});
