import { React, shallow } from '../setup';
import SearchBody from '../../lib/Search/SearchBody';

describe('SearchBody', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SearchBody className="waffles">
        <div className="child">small child</div>
      </SearchBody>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds the className prop', () => {
    expect(wrapper.hasClass('waffles')).toBe(true);
  });
});
