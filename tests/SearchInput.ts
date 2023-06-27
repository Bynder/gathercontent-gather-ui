import { React, shallow } from './setup';
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
  });

  test('can have an initial value', () => {
    props = {
      value: 'foo bar',
      type: 'primary',
      onChangeHandler() {}
    };

    const wrapper = shallow(<SearchInput {...props} />);
    const input = wrapper.find('input');

    expect(input.props().value).toEqual('foo bar');
  });
});
