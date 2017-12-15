import { React, expect, mount } from '../setup';
import { Shortcut, ShortcutIcon } from '../../lib';

describe('Shortcut', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Shortcut name="Bold" styleClass="shortcut__bold">
        <ShortcutIcon>⌘</ShortcutIcon>
        <ShortcutIcon>Option</ShortcutIcon>
        <ShortcutIcon>b</ShortcutIcon>
      </Shortcut>
    );
  });

  it('renders a Shortcut title div with class shortcut__bold', () => {
    expect(wrapper.find('.shortcut__bold')).to.have.length(1);
  });

  it('renders 3 a ShortcutIcons', () => {
    const icon = wrapper.find(ShortcutIcon);
    expect(icon).to.have.length(3);
    expect(icon.first().text()).to.equal('⌘');
  });

  it('renders 2 shortcut__plus divs', () => {
    expect(wrapper.find('.shortcut__plus')).to.have.length(2);
  });
});
