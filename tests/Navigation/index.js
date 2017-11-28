import MenuItem from 'react-bootstrap/lib/MenuItem';
import { React, expect, mount } from '../setup';
import Navigation from '../../lib/Navigation';

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

  it('renders 2 MenuItems', () => {
    expect(wrapper.find(MenuItem)).to.have.length(2);
  });

  it('adds the tabs modifier class', () => {
    wrapper.setProps({
      tabs: true
    });
    expect(wrapper.find('.navigation--tabs')).to.have.length(1);
  });

  it('applies navigation__item to both MenuItems', () => {
    expect(wrapper.find('.navigation__item')).to.have.length(2);
  });

  it('applies navigation__item--active to both 1 MenuItems', () => {
    expect(wrapper.find('.navigation__item--active')).to.have.length(1);
  });
});
