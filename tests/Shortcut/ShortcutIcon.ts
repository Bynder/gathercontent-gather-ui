import { React, mount } from '../setup';
import { ShortcutIcon } from '../../lib';

describe('Shortcut/ShortcutIcon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ShortcutIcon>i</ShortcutIcon>);
  });

  test('renders a the icon children', () => {
    expect(wrapper.text()).toEqual('i');
  });
});
