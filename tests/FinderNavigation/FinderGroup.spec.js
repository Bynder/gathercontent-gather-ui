import { React, shallow } from '../setup';
import { FinderNavigation } from '../../lib';

describe('FinderNavigation Group', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Group title="waffles">
        <FinderNavigation.Item>hello!</FinderNavigation.Item>
      </FinderNavigation.Group>
    );
  });

  test('renders children', () => {
    expect(wrapper.find(FinderNavigation.Item)).toHaveLength(1);
  });

  test('displays the title', () => {
    expect(wrapper.find('.finder-group-title')).toHaveLength(1);
    expect(wrapper.find('.finder-group-title').text()).toEqual('waffles');
  });
});
