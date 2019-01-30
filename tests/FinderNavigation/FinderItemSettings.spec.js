import { React, shallow } from '../setup';
import { FinderNavigation } from '../../lib';

describe('FinderNavigation Content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.ItemSettings>
        <div className="waffles">Hello!</div>
      </FinderNavigation.ItemSettings>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.waffles')).toHaveLength(1);
  });
});
