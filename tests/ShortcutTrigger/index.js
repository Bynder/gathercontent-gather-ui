import { React, mount } from '../setup';
import { ShortcutTrigger } from '../../lib';

describe('Shortcut Trigger', () => {
  let wrapper;
  let spy;

  beforeEach(() => {
    spy = jest.fn();
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();

    wrapper = mount(
      <ShortcutTrigger shortcutKey="enter" onShortcutTrigger={spy} />
    );
  });

  test('renders nothing', () => {
    expect(wrapper.isEmptyRender()).toEqual(true);
  });

  test('adds and removes event listeners for keydown', () => {
    expect(document.addEventListener).toHaveBeenCalledTimes(1);
    expect(document.addEventListener).toHaveBeenCalledWith(
      'keydown',
      wrapper.instance().onKeyDown
    );
    wrapper.instance().componentWillUnmount();
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'keydown',
      wrapper.instance().onKeyDown
    );
  });

  test('triggers the function when the shortcut is pressed', () => {
    wrapper.instance().onKeyDown({ repeat: false, key: 'enter' });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({ repeat: false, key: 'enter' });

    wrapper.setProps({ withCtrlKey: true });
    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', ctrlKey: true });
    expect(spy).toHaveBeenCalledTimes(2);

    wrapper.setProps({
      withCtrlKey: true,
      withMetaKey: true,
      withShiftKey: true,
      withAltKey: true
    });
    wrapper.instance().onKeyDown({
      repeat: false,
      key: 'enter',
      ctrlKey: true,
      metaKey: true,
      shiftKey: true,
      altKey: true
    });
    expect(spy).toHaveBeenCalledTimes(3);
  });

  test('does not trigger the function when the shortcut is not pressed', () => {
    wrapper.instance().onKeyDown({ repeat: false, key: 'a' });
    expect(spy).not.toHaveBeenCalled();

    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', ctrlKey: true });
    expect(spy).not.toHaveBeenCalled();

    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', metaKey: true });
    expect(spy).not.toHaveBeenCalled();

    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', shiftKey: true });
    expect(spy).not.toHaveBeenCalled();
  });

  test('does not trigger the function when the event is repeating', () => {
    wrapper.instance().onKeyDown({ repeat: true });
    expect(spy).not.toHaveBeenCalled();
  });
});
