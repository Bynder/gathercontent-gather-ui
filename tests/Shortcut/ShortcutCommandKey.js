import { React, expect, mount } from '../setup';
import { ShortcutCommandKey } from '../../lib';

describe('Shortcut/ShortcutCommandKey', () => {
  let wrapper;

  it('renders a ⌘ for Mac OS', () => {
    wrapper = mount(<ShortcutCommandKey mac />);
    expect(wrapper.text()).to.equal('⌘');
  });

  it('renders a Ctrl for everything else', () => {
    wrapper = mount(<ShortcutCommandKey mac={false} />);
    expect(wrapper.text()).to.equal('Ctrl');
  });
});
