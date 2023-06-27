import { MenuItem, Navigation } from 'lib';
import { React, mount } from '../setup';

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Navigation>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </Navigation>
    );
  });

  test('renders 2 MenuItems', () => {
    expect(wrapper.find(MenuItem)).toHaveLength(2);
  });

  test('adds the tabs modifier class', () => {
    wrapper.setProps({
      tabs: true
    });
    expect(wrapper.find('.navigation--tabs')).toHaveLength(1);
  });

  test('applies navigation__item to both MenuItems', () => {
    expect(wrapper.find('.navigation__item').hostNodes()).toHaveLength(2);
  });

  test('applies navigation__item--active to both 1 MenuItems', () => {
    expect(wrapper.find('.navigation__item--active').hostNodes()).toHaveLength(
      1
    );
  });
});
