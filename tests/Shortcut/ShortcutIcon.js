import { React, expect, mount } from '../setup';
import { ShortcutIcon } from '../../lib';

describe('Shortcut/ShortcutIcon', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ShortcutIcon>i</ShortcutIcon>);
  });

  it('renders a the icon children', () => {
    expect(wrapper.text()).to.equal('i');
  });
});
