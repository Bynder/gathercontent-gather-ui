import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { FontAwesomeIcon, DropdownSwitcher } from '../../lib';
import { MenuItem, Dropdown } from 'react-bootstrap/lib';
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

storiesOf('Components', module)
  .add('Dropdown Switcher', () => {
    return (
      <div>
        <StoryItem
          title="Dropdown Switcher"
          description="An inline dropdown component. Receives a menu with options to display when toggled.">

          <DropdownSwitcher
            title="Archived Items"
            id="ai"
            menu={ menu }
          />
        </StoryItem>
      </div>
    );
  });
