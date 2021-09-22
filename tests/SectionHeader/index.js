import { React, shallow } from '../setup';
import { SectionHeader, MenuItem } from '../../lib';

describe('SectionHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SectionHeader title="Test Title" />);
  });

  afterEach(() => {});

  test('renders a dropdown when a menu is supplied', () => {
    const menu = (
      <>
        <MenuItem href="#" eventKey="1">
          Items
        </MenuItem>
        <MenuItem divider />
        <MenuItem disabled eventKey="2">
          Archived Items
        </MenuItem>
      </>
    );

    wrapper.setProps({
      children: menu
    });

    expect(wrapper.find(MenuItem)).toHaveLength(3);
  });
});
