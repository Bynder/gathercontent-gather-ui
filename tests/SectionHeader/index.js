import { MenuItem, Dropdown } from 'react-bootstrap/lib';
import { React, shallow } from '../setup';
import { SectionHeader, DropdownSwitcher } from '../../lib';

describe('SectionHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SectionHeader title="Test Title" />);
  });

  afterEach(() => {});

  test('renders its title', () => {
    expect(wrapper.find('.section-header__title').text()).toBe('Test Title');
  });

  test('renders a dropdown when a menu is supplied', () => {
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

    expect(wrapper.find(DropdownSwitcher)).toHaveLength(1);
    expect(wrapper.find(Dropdown.Menu)).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toHaveLength(3);
  });
});
