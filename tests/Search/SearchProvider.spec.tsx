import { React, shallow } from '../setup';
import SearchProvider, { SearchContext } from '../../lib/Search/SearchProvider';

// @ts-expect-error TS(2582): Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('SearchProvider', () => {
  let wrapper: any;
  // @ts-expect-error TS(2304): Cannot find name 'beforeEach'.
  beforeEach(() => {
    wrapper = shallow(
      <SearchProvider>
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className="child" />
      </SearchProvider>
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders a Provider', () => {
    const mockValue = {
      showBody: false,
      displayBody: wrapper.instance().displayBody,
      hideBody: wrapper.instance().hideBody
    };
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(SearchContext.Provider)).toHaveLength(1);
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find(SearchContext.Provider).prop('value')).toEqual(
      mockValue
    );
  });

  // @ts-expect-error TS(2582): Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
  test('renders children', () => {
    // @ts-expect-error TS(2304): Cannot find name 'expect'.
    expect(wrapper.find('.child')).toHaveLength(1);
  });
});
