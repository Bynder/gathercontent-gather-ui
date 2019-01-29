import { React, shallow } from '../setup';
import { FinderNavigation } from '../../lib';

describe('FinderNavigation Content', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.ItemContent>
        <FinderNavigation.ItemSettings>hello!</FinderNavigation.ItemSettings>
      </FinderNavigation.ItemContent>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(FinderNavigation.ItemSettings)).toHaveLength(1);
  });
});
