import { React, expect, mount, jsDomGlobal, sinon } from '../setup';
import { ExpandingTextArea } from '../../lib';

describe('EditableTextWrapper', () => {
  jsDomGlobal();

  let wrapper;
  let sandbox;
  let handleOnChangeSpy;
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
    handleOnChangeSpy = sinon.spy();
    setInitialRowsSpy = sinon.spy(
      ExpandingTextArea.prototype,
      'setInitialRows'
    );
    handleChangeSpy = sinon.spy(ExpandingTextArea.prototype, 'handleChange');
    resizeTextAreaSpy = sinon.spy(
      ExpandingTextArea.prototype,
      'resizeTextArea'
    );
    calculateRowsSpy = sinon.spy(ExpandingTextArea.prototype, 'calculateRows');
    sandbox = sinon.sandbox.create();
    wrapper = mount(
      <ExpandingTextArea
        style={style}
        placeholder="Placeholder..."
        handleOnChange={handleOnChangeSpy}
      />
    );
  });

  afterEach(() => {
    sandbox.restore();
    ExpandingTextArea.prototype.setInitialRows.restore();
    ExpandingTextArea.prototype.handleChange.restore();
    ExpandingTextArea.prototype.resizeTextArea.restore();
    ExpandingTextArea.prototype.calculateRows.restore();
  });

  it('sets initial rows on render', () => {
    expect(wrapper.find('.expanding-textarea')).to.have.length(1);
    expect(setInitialRowsSpy.calledOnce).to.equal(true);
    expect(calculateRowsSpy.calledOnce).to.equal(true);
    expect(wrapper.state('rowCount')).to.equal(
      calculateRowsSpy.lastCall.returnValue
    );
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
