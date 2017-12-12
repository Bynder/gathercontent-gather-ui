import { React, expect, mount } from '../setup';
import { ShortcutOptionKey } from '../../lib';

describe('Shortcut/ShortcutOptionKey', () => {
  let wrapper;

  it('renders a Option for Mac OS', () => {
    wrapper = mount(<ShortcutOptionKey mac />);
    expect(wrapper.text()).to.equal('Option');
  });

  it('renders a Alt for everything else', () => {
    wrapper = mount(<ShortcutOptionKey mac={false} />);
    expect(wrapper.text()).to.equal('Alt');
  });
});
