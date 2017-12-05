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

  it('adds and removes event listeners for keypress', () => {
    expect(documentAddEventStub).to.be.calledOnce();
    expect(documentAddEventStub).to.be.calledWithExactly(
      'keypress',
      wrapper.instance().onKeyPress
    );
    wrapper.instance().componentWillUnmount();
    expect(documentRemoveEventStub).to.be.calledWithExactly(
      'keypress',
      wrapper.instance().onKeyPress
    );
  });

  it('triggers the function when the shortcut is pressed', () => {
    wrapper.instance().onKeyPress({ repeat: false, key: 'enter' });
    expect(spy).to.be.calledOnce();

    wrapper.setProps({ withCtrlKey: true });
    wrapper
      .instance()
      .onKeyPress({ repeat: false, key: 'enter', ctrlKey: true });
    expect(spy).to.be.calledTwice();

    wrapper.setProps({
      withCtrlKey: true,
      withMetaKey: true,
      withShiftKey: true
    });
    wrapper.instance().onKeyPress({
      repeat: false,
      key: 'enter',
      ctrlKey: true,
      metaKey: true,
      shiftKey: true
    });
    expect(spy).to.be.calledThrice();
  });

  it('does not trigger the function when the shortcut is not pressed', () => {
    wrapper.instance().onKeyPress({ repeat: false, key: 'a' });
    expect(spy).to.not.be.called();

    wrapper
      .instance()
      .onKeyPress({ repeat: false, key: 'enter', ctrlKey: true });
    expect(spy).to.not.be.called();

    wrapper
      .instance()
      .onKeyPress({ repeat: false, key: 'enter', metaKey: true });
    expect(spy).to.not.be.called();

    wrapper
      .instance()
      .onKeyPress({ repeat: false, key: 'enter', shiftKey: true });
    expect(spy).to.not.be.called();
  });

  it('does not trigger the function when the event is repeating', () => {
    wrapper.instance().onKeyPress({ repeat: true });
    expect(spy).to.not.be.called();
  });
});
