import { React, expect, mount } from '../setup';
import {
  Shortcut,
  ShortcutCommandKey,
  ShortcutOptionKey,
  ShortcutIcon
} from '../../lib';

describe.only('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Shortcut name="Bold" styleClass="shortcut__bold">
        <ShortcutCommandKey />
        <ShortcutOptionKey />
        <ShortcutIcon>b</ShortcutIcon>
      </Shortcut>
    );
  });

  it('renders a Shortcut title div with class shortcut__bold', () => {
    expect(wrapper.find('.shortcut__bold')).to.have.length(1);
  });

  it('renders a ShortcutCommandKey', () => {
    expect(wrapper.find(ShortcutCommandKey)).to.have.length(1);
  });

  it('renders a ShortcutOptionKey', () => {
    expect(wrapper.find(ShortcutOptionKey)).to.have.length(1);
  });

  it('renders a ShortcutIcon', () => {
    const icon = wrapper.find(ShortcutIcon);
    expect(icon).to.have.length(1);
    expect(icon.text()).to.equal('b');
  });

  it('renders 2 shortcut__plus divs', () => {
    expect(wrapper.find('.shortcut__plus')).to.have.length(2);
  });
});
