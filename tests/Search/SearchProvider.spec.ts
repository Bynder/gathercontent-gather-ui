import { React, shallow } from '../setup';
import SearchProvider, { SearchContext } from '../../lib/Search/SearchProvider';

describe('SearchProvider', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SearchProvider>
        <div className="child" />
      </SearchProvider>
    );
  });

  test('renders a Provider', () => {
    const mockValue = {
      showBody: false,
      displayBody: wrapper.instance().displayBody,
      hideBody: wrapper.instance().hideBody
    };
    expect(wrapper.find(SearchContext.Provider)).toHaveLength(1);
    expect(wrapper.find(SearchContext.Provider).prop('value')).toEqual(
      mockValue
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });
});
