import { React, expect, mount, sinon, jsDomGlobal } from '../setup';
import { ShortcutTrigger } from '../../lib';

describe('Shortcut Trigger', () => {
  jsDomGlobal();

  let wrapper;
  let spy;
  let documentAddEventStub;
  let documentRemoveEventStub;

  const sandbox = sinon.sandbox.create();

  beforeEach(() => {
    spy = sandbox.spy();
    documentAddEventStub = sandbox.stub(document, 'addEventListener', () => {});
    documentRemoveEventStub = sandbox.stub(
      document,
      'removeEventListener',
      () => {}
    );

    wrapper = mount(
      <ShortcutTrigger shortcutKey="enter" onShortcutTrigger={spy} />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('renders nothing', () => {
    expect(wrapper.isEmptyRender()).to.equal(true);
  });

  it('adds and removes event listeners for keydown', () => {
    expect(documentAddEventStub).to.be.calledOnce();
    expect(documentAddEventStub).to.be.calledWithExactly(
      'keydown',
      wrapper.instance().onKeyDown
    );
    wrapper.instance().componentWillUnmount();
    expect(documentRemoveEventStub).to.be.calledWithExactly(
      'keydown',
      wrapper.instance().onKeyDown
    );
  });

  it('triggers the function when the shortcut is pressed', () => {
    wrapper.instance().onKeyDown({ repeat: false, key: 'enter' });
    expect(spy).to.be.calledOnce();

    wrapper.setProps({ withCtrlKey: true });
    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', ctrlKey: true });
    expect(spy).to.be.calledTwice();

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
    expect(spy).to.be.calledThrice();
  });

  it('does not trigger the function when the shortcut is not pressed', () => {
    wrapper.instance().onKeyDown({ repeat: false, key: 'a' });
    expect(spy).to.not.be.called();

    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', ctrlKey: true });
    expect(spy).to.not.be.called();

    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', metaKey: true });
    expect(spy).to.not.be.called();

    wrapper
      .instance()
      .onKeyDown({ repeat: false, key: 'enter', shiftKey: true });
    expect(spy).to.not.be.called();
  });

  it('does not trigger the function when the event is repeating', () => {
    wrapper.instance().onKeyDown({ repeat: true });
    expect(spy).to.not.be.called();
  });
});
