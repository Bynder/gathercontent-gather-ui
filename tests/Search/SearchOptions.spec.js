import { React, shallow } from '../setup';
import SearchOptions from '../../lib/Search/SearchOptions';

describe('SearchOptions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchOptions>
        <div className="child">small child</div>
      </SearchOptions>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });
});
