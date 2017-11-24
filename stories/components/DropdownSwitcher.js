import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MenuItem, Dropdown } from 'react-bootstrap/lib';
import { FontAwesomeIcon, DropdownSwitcher } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const menu = (
  <Dropdown.Menu className="dropdown__menu dropdown-menu--arrowed">
    <MenuItem href="#" eventKey="1">
      <FontAwesomeIcon name="fa-folder-o" /> Items
    </MenuItem>
    <MenuItem divider />
    <MenuItem disabled eventKey="2">
      <FontAwesomeIcon name="fa-archive" /> Archived Items
    </MenuItem>
  </Dropdown.Menu>
);

storiesOf('Components', module).add('Dropdown Switcher', () => (
  <div>
    <StoryItem
      title="Dropdown Switcher"
      description="An inline dropdown component. Receives a menu with options to display when toggled."
    >
      <DropdownSwitcher title="Archived Items" id="ai" menu={menu} />
    </StoryItem>
    <StoryItem
      title="Popover Switcher"
      description="An inline popover component. Receives a `children` containing the dropdown menu."
    >
      <DropdownSwitcher title="Project Name">{menu}</DropdownSwitcher>
    </StoryItem>
    <StoryItem
      title="Custom Dropdown HTML"
      description="Using custom html vs bootstraps Dropdown.Menu."
    >
      <DropdownSwitcher title="Project Name">
        <ul className="dropdown-menu">
          <li className="dropdown__item">
            <a href="#test" className="dropdown__link">
              Personal Settings
            </a>
          </li>
        </ul>
      </DropdownSwitcher>
    </StoryItem>
  </div>
));
