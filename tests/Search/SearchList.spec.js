import { React, shallow } from '../setup';
import SearchList from '../../lib/Search/SearchList';

describe('SearchList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchList heading="The heading!">
        <div className="child">small child</div>
      </SearchList>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('renders the heading', () => {
    expect(wrapper.find('.search-list__heading').text()).toEqual(
      'The heading!'
    );
  });
});
