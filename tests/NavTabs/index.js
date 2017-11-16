import { React, expect, jsDomGlobal, mount } from '../setup';
import { MenuItem } from 'react-bootstrap/lib';
import NavTabs from '../../lib/NavTabs';

describe('NavTabs', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <NavTabs>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </NavTabs>
    );
  });

  it('renders 2 MenuItems', () => {
    expect(wrapper.find(MenuItem)).to.have.length(2);
  });

  it('applies nav-tabs__item to both MenuItems', () => {
    expect(wrapper.find('.nav-tabs__item')).to.have.length(2);
  });

  it('applies nav-tabs__item--active to both 1 MenuItems', () => {
    expect(wrapper.find('.nav-tabs__item--active')).to.have.length(1);
  });
});
