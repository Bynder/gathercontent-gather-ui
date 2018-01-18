import { React, expect, mount, jsDomGlobal, sinon } from '../setup';
import { ExpandingTextArea } from '../../lib';

describe('EditableTextWrapper', () => {
  jsDomGlobal();
  const sandbox = sinon.sandbox.create();

  let wrapper;
  let handleOnChangeSpy;
  let handleOnFocusSpy;
  let setInitialRowsSpy;
  let handleChangeSpy;
  let resizeTextAreaSpy;
  let calculateRowsSpy;
  let style;

  beforeEach(() => {
    style = {
      lineHeight: '20px',
      padding: '10px 0 10px'
    };
    handleOnChangeSpy = sandbox.spy();
    handleOnFocusSpy = sandbox.spy();
    setInitialRowsSpy = sandbox.spy(
      ExpandingTextArea.prototype,
      'setInitialRows'
    );
    handleChangeSpy = sandbox.spy(ExpandingTextArea.prototype, 'handleChange');
    resizeTextAreaSpy = sandbox.spy(
      ExpandingTextArea.prototype,
      'resizeTextArea'
    );
    calculateRowsSpy = sandbox.spy(
      ExpandingTextArea.prototype,
      'calculateRows'
    );
    wrapper = mount(
      <ExpandingTextArea
        style={style}
        placeholder="Placeholder..."
        handleOnChange={handleOnChangeSpy}
        handleOnFocus={handleOnFocusSpy}
      />
    );
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('sets initial rows on render', () => {
    expect(wrapper.find('.expanding-textarea')).to.have.length(1);
    expect(setInitialRowsSpy.calledOnce).to.equal(true);
    expect(calculateRowsSpy.calledOnce).to.equal(true);
    expect(wrapper.state('rowCount')).to.equal(
      calculateRowsSpy.lastCall.returnValue
    );
  });

  it('respects the minRows prop', () => {
    expect(wrapper.state('rowCount')).to.equal(1);
    wrapper.setProps({ minRows: 4 });
    wrapper.instance().resizeTextArea();
    expect(wrapper.state('rowCount')).to.equal(4);
  });

  it('sets the input value as the value prop', () => {
    wrapper.setProps({ value: 'New Value' });
    expect(wrapper.text()).to.equal(wrapper.prop('value'));
  });

  it('calls the handleOnChange prop on change', () => {
    wrapper.simulate('change', { target: { value: 'Changed value' } });
    expect(handleOnChangeSpy.called).to.equal(true);
  });

  it('sets the row state on change', () => {
    wrapper.simulate('change', { target: { value: 'Changed value' } });
    wrapper.simulate('keyDown', { keyCode: 13 });
    expect(handleChangeSpy.called).to.equal(true);
    expect(resizeTextAreaSpy.called).to.equal(true);
    expect(calculateRowsSpy.called).to.equal(true);
    expect(wrapper.state('rowCount')).to.equal(
      calculateRowsSpy.lastCall.returnValue
    );
  });

  it('calls a prop function when focus and blue', () => {
    wrapper.simulate('focus', {});
    expect(handleOnFocusSpy).to.be.calledOnce();

    wrapper.simulate('blur', {});
    expect(handleOnFocusSpy).to.be.calledTwice();
  });

  it('sets the value state if the setValue prop is false', () => {
    wrapper.simulate('change', { target: { value: 'Changed value' } });
    expect(wrapper.state('inputValue')).to.equal('Changed value');
  });

  it('does not set the value state if the setValue prop is true', () => {
    wrapper
      .setProps({ setValue: true })
      .simulate('change', { target: { value: 'Changed value' } });
    expect(wrapper.state('inputValue')).to.equal('');
  });
});
