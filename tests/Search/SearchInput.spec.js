import { React, shallow } from '../setup';
import SearchInput from '../../lib/Search/SearchInput';

describe('SearchInput', () => {
  let wrapper;
  let onChangeSpy;
  let hideBodySpy;
  let displayBodySpy;
  beforeEach(() => {
    onChangeSpy = jest.fn();
    hideBodySpy = jest.fn();
    displayBodySpy = jest.fn();
    wrapper = shallow(
      <SearchInput
        onChange={onChangeSpy}
        hideBody={hideBodySpy}
        showBody={false}
        displayBody={displayBodySpy}
      />
    );
  });

  test('renders an input', () => {
    const input = wrapper.find('.search__input--input');
    expect(input).toHaveLength(1);
    expect(input.prop('onChange')).toEqual(wrapper.instance().handleChange);
    expect(input.prop('onFocus')).toEqual(wrapper.instance().handleFocus);
  });

  test('renders a clear button', () => {
    const clear = wrapper.find('.search__input--clear');
    expect(clear).toHaveLength(1);
    expect(clear.prop('clickHandler')).toEqual(wrapper.instance().clearInput);
  });

  test('renders a start button', () => {
    const start = wrapper.find('.search__input--start');
    expect(start).toHaveLength(1);
    expect(start.prop('clickHandler')).toEqual(
      wrapper.instance().handleSearchClick
    );
  });

  test('adds a .is-focus class', () => {
    expect(wrapper.hasClass('is-focus')).toBe(false);
    wrapper.setProps({ showBody: true });
    expect(wrapper.hasClass('is-focus')).toBe(true);
  });

  test('handles a change', () => {
    let mockEvent = { target: { value: 'waff' } };
    wrapper.instance().handleChange(mockEvent);
    expect(onChangeSpy).toHaveBeenCalledWith('waff');
    expect(displayBodySpy).toHaveBeenCalled();
    mockEvent = { target: { value: '' } };
    wrapper.instance().handleChange(mockEvent);
    expect(onChangeSpy).toHaveBeenCalledWith('');
    expect(hideBodySpy).toHaveBeenCalled();
  });

  test('handles clearInput', () => {
    wrapper.instance().clearInput();
    expect(onChangeSpy).toHaveBeenCalledWith('');
    expect(hideBodySpy).toHaveBeenCalled();
  });

  test('handles focus', () => {
    wrapper.instance().handleFocus();
    expect(wrapper.state('isFocussed')).toEqual(true);
  });
});
