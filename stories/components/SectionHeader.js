import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MenuItem, Dropdown } from 'react-bootstrap/lib';
import {
  FontAwesomeIcon,
  DropdownSwitcher,
  SectionHeader,
  Button
} from '../../lib';
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

const customTitle = (
  <DropdownSwitcher
    title={<h1 className="section-header__title">Archived Items</h1>}
  >
    {menu}
  </DropdownSwitcher>
);

storiesOf('Components', module).add('Section Header', () => (
  <div>
    <StoryItem
      title="Standard Header"
      description="Standard header with a title passed as a string."
    >
      <SectionHeader title="Archived Items" />
    </StoryItem>
    <StoryItem
      title="Header with custom title"
      description="Custom header node passed as title (e.g. DropDownSwitcher)."
    >
      <SectionHeader title={customTitle} />
    </StoryItem>
    <StoryItem
      title="Header with CTA button"
      description="Header with a button passed as a CTA."
    >
      <SectionHeader
        title="Archived Items"
        cta={
          <Button className="section-header--right" clickHandler={() => {}}>
            Create new project
          </Button>
        }
      />
    </StoryItem>
  </div>
));
