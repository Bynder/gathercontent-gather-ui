import { React, mount } from '../setup';
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

  test('renders a Shortcut title div with class shortcut__bold', () => {
    expect(wrapper.find('.shortcut__bold')).toHaveLength(1);
  });

  test('renders 3 a ShortcutIcons', () => {
    const icon = wrapper.find(ShortcutIcon);
    expect(icon).toHaveLength(3);
    expect(icon.first().text()).toEqual('⌘');
  });

  test('can render a single icon', () => {
    const shortcut = mount(
      <Shortcut name="Bold" styleClass="shortcut__bold">
        <ShortcutIcon>⌘</ShortcutIcon>
      </Shortcut>
    );
    const icon = shortcut.find(ShortcutIcon);
    expect(icon).toHaveLength(1);
    expect(icon.first().text()).toEqual('⌘');
  });

  test('renders 2 shortcut__plus divs', () => {
    expect(wrapper.find('.shortcut__plus')).toHaveLength(2);
  });
});
