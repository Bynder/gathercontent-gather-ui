import { React, shallow } from '../setup';
import { FinderNavigation } from '../../lib';

describe('FinderNavigation Item', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FinderNavigation.Item>
        <div className="child">hello!</div>
      </FinderNavigation.Item>
    );
  });

  test('renders children', () => {
    expect(wrapper.find('.child')).toHaveLength(1);
  });

  test('adds an active class', () => {
    expect(wrapper.hasClass('is-active')).toBe(false);
    wrapper.setProps({ active: true });
    expect(wrapper.hasClass('is-active')).toBe(true);
  });
});
