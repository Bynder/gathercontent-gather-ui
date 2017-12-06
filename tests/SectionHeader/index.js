import { MenuItem, Dropdown } from 'react-bootstrap/lib';
import { React, expect, shallow } from '../setup';
import { SectionHeader, DropdownSwitcher } from '../../lib';

describe('SectionHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SectionHeader title="Test Title" />);
  });

  afterEach(() => {});

  it('renders its title', () => {
    expect(wrapper.find('.section-header__title').text()).to.have.equal(
      'Test Title'
    );
  });

  it('renders a dropdown when a menu is supplied', () => {
    const menu = (
      <Dropdown.Menu className="dropdown__menu dropdown-menu--arrowed">
        <MenuItem href="#" eventKey="1">
          Items
        </MenuItem>
        <MenuItem divider />
        <MenuItem disabled eventKey="2">
          Archived Items
        </MenuItem>
      </Dropdown.Menu>
    );

    wrapper.setProps({
      children: menu
    });

    expect(wrapper.find(DropdownSwitcher)).to.have.length(1);
    expect(wrapper.find(Dropdown.Menu)).to.have.length(1);
    expect(wrapper.find(MenuItem)).to.have.length(3);
  });
});
