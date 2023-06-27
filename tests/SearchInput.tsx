import { React, shallow } from './setup';
import SearchInput from '../lib/SearchInput';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SearchInput', () => {
  let props;

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('should render an input component', () => {
    props = {
      type: 'primary',
      onChangeHandler() {}
    };

    // @ts-expect-error TS(2709): Cannot use namespace 'SearchInput' as a type.
    const wrapper = shallow(<SearchInput {...props} />);
    const input = wrapper.find('input');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input).toHaveLength(1);
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('can have an initial value', () => {
    props = {
      value: 'foo bar',
      type: 'primary',
      onChangeHandler() {}
    };

    // @ts-expect-error TS(2709): Cannot use namespace 'SearchInput' as a type.
    const wrapper = shallow(<SearchInput {...props} />);
    const input = wrapper.find('input');

    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(input.props().value).toEqual('foo bar');
  });
});
