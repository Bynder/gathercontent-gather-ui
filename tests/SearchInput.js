import { React, shallow, mount } from './setup';
import SearchInput from '../lib/SearchInput';

describe('SearchInput', () => {
  let props;

  test('should render an input component', () => {
    props = {
      type: 'primary',
      onChangeHandler() {}
    };

    const wrapper = shallow(<SearchInput {...props} />);
    const input = wrapper.find('input');

    expect(input).toHaveLength(1);
    expect(input.props().className).toEqual('search-input__input');
  });

  test('can have an initial value', () => {
    props = {
      initialValue: 'foo bar',
      type: 'primary',
      onChangeHandler() {}
    };

    const wrapper = shallow(<SearchInput {...props} />);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('foo bar');
  });

  test('should run a callback when the query changes', () => {
    const onChangeHandler = jest.fn();

    const wrapper = mount(<SearchInput onChangeHandler={onChangeHandler} />);

    wrapper.find('input').simulate('change');
    expect(onChangeHandler).toHaveBeenCalledTimes(1);
  });

  test('should map the state query to the input value', () => {
    const wrapper = mount(<SearchInput onChangeHandler={() => {}} />);

    wrapper.setState({ query: 'fake query' });
    expect(wrapper.state().query).toEqual('fake query');
  });

  test('should clear the search when button is pressed', () => {
    const callback = jest.fn();

    const wrapper = mount(<SearchInput onChangeHandler={callback} />);
    const clearButton = wrapper.find('.search-input__clear');
    const input = wrapper.find('.search-input__input');

    wrapper.setState({ query: 'fake query' });
    clearButton.simulate('click');
    expect(wrapper.state().query).toEqual('');
    expect(input.props().value).toEqual('');
  });
});
