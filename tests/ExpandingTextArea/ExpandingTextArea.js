import { React, mount } from '../setup';
import { ExpandingTextArea } from '../../lib';

describe('ExpandingTextArea', () => {
  jest.useFakeTimers();
  let wrapper;
  let handleOnChangeSpy;
  let handleOnFocusSpy;
  let onRowCountChangeSpy;
  let handleOnBlurSpy;
  let style;

  beforeEach(() => {
    style = {
      lineHeight: '20px',
      padding: '10px 0 10px'
    };
    handleOnChangeSpy = jest.fn();
    handleOnFocusSpy = jest.fn();
    onRowCountChangeSpy = jest.fn();
    handleOnBlurSpy = jest.fn();
    wrapper = mount(
      <ExpandingTextArea
        style={style}
        placeholder="Placeholder..."
        handleOnChange={handleOnChangeSpy}
        handleOnFocus={handleOnFocusSpy}
        handleOnBlur={handleOnBlurSpy}
        onRowCountChange={onRowCountChangeSpy}
      />
    );
  });

  test('sets initial rows on render', () => {
    expect(wrapper.find('.expanding-textarea')).toHaveLength(1);
    expect(wrapper.state('rowCount')).toEqual(1);
  });

  test('respects the minRows prop', () => {
    expect(wrapper.state('rowCount')).toEqual(1);
    wrapper.setProps({ minRows: 4 });
    wrapper.instance().resizeTextArea();
    jest.runAllTimers();
    expect(wrapper.state('rowCount')).toEqual(4);
  });

  test('calls the onRowCountChange prop function when the row count changes', () => {
    expect(wrapper.state('rowCount')).toEqual(1);
    wrapper.setProps({ minRows: 4 });
    wrapper.instance().resizeTextArea();
    jest.runAllTimers();
    expect(onRowCountChangeSpy).toHaveBeenCalled();
  });

  test('sets the input value as the value prop', () => {
    wrapper.setProps({ value: 'New Value' });
    expect(wrapper.text()).toEqual(wrapper.prop('value'));
  });

  test('calls the handleOnChange prop on change', () => {
    wrapper.simulate('change', { target: { value: 'Changed value' } });
    expect(handleOnChangeSpy).toHaveBeenCalled();
  });

  test('sets the row state on change', () => {
    wrapper.simulate('change', { target: { value: 'Changed value' } });
    wrapper.simulate('keyDown', { keyCode: 13 });
    expect(wrapper.state('rowCount')).toEqual(1);
  });

  test('calls a prop function when focus and blur', () => {
    wrapper.simulate('focus', {});
    expect(handleOnFocusSpy).toHaveBeenCalledTimes(1);

    wrapper.simulate('blur', {});
    expect(handleOnBlurSpy).toHaveBeenCalledTimes(1);
  });

  test('sets the value state if the setValue prop is false', () => {
    wrapper.simulate('change', { target: { value: 'Changed value' } });
    expect(wrapper.state('inputValue')).toEqual('Changed value');
  });

  test('does not set the value state if the setValue prop is true', () => {
    wrapper
      .setProps({ setValue: true })
      .simulate('change', { target: { value: 'Changed value' } });
    expect(wrapper.state('inputValue')).toEqual('');
  });
});
