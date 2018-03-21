import { React, mount } from '../setup';
import SearchDropdown from '../../lib/SearchDropdown';

describe('SearchDropdown', () => {
  let wrapper;
  let mockResults;
  let handleOnChangeSpy;
  let onInputClearSpy;

  beforeEach(() => {
    handleOnChangeSpy = jest.fn();
    onInputClearSpy = jest.fn();

    mockResults = [
      {
        name: 'item 1',
        action: () => {}
      },
      {
        name: 'item 2',
        action: () => {}
      }
    ];

    wrapper = mount(
      <SearchDropdown
        results={mockResults}
        handleOnChange={handleOnChangeSpy}
        onInputClear={onInputClearSpy}
      />
    );
  });

  test('should render the results if they exist', () => {
    expect(wrapper.find('.dropdown-menu')).toHaveLength(1);
    wrapper.setProps({ results: [] });
    expect(wrapper.find('.dropdown-menu')).toHaveLength(0);
  });

  test('should call the handleOnChange prop when the input value changes', () => {
    wrapper
      .find('.dropdown-search__input')
      .simulate('change', { target: { value: 'Changed value' } });
    expect(handleOnChangeSpy).toHaveBeenCalled();
    expect(wrapper.state('inputValue')).toEqual('Changed value');
  });

  test('onInputClear should clear the inputValue state and call the onInputClear prop', () => {
    wrapper
      .find('.dropdown-search__input')
      .simulate('change', { target: { value: 'Changed value' } });
    expect(wrapper.state('inputValue')).toEqual('Changed value');
    wrapper.instance().clearInputValue();
    expect(wrapper.state('inputValue')).toEqual('');
    expect(onInputClearSpy).toHaveBeenCalled();
  });

  test('setting the fullWidth prop to true should add a full-width class', () => {
    expect(wrapper.find('.full-width').length).toEqual(0);
    wrapper.setProps({
      fullWidth: true
    });
    expect(wrapper.find('.full-width').length).toEqual(1);
  });

  test('setting the direction prop to up should add a dropup class', () => {
    expect(wrapper.find('.dropup').length).toEqual(0);
    wrapper.setProps({
      direction: 'up'
    });
    expect(wrapper.find('.dropup').length).toEqual(1);
  });
});
