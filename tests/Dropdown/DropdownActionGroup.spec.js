import { React, shallow } from '../setup';
import { Dropdown } from '../../lib';

describe('Dropdown Action Group', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Dropdown.ActionGroup>Action group text</Dropdown.ActionGroup>
    );
  });

  test('rendering children', () => {
    expect(wrapper.text()).toBe('Action group text');
  });
});
