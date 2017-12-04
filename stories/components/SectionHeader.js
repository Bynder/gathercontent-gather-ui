import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MenuItem, Dropdown } from 'react-bootstrap/lib';
import {
  FontAwesomeIcon,
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
      <SectionHeader title="Archived Items" id="ai">
        {menu}
      </SectionHeader>
    </StoryItem>
    <StoryItem
      title="Header with CTA button"
      description="Header with a button passed as a CTA."
    >
      <SectionHeader
        title="Templates"
        cta={
          <Button className="section-header--right" clickHandler={() => {}}>
            Create new project
          </Button>
        }
      />
    </StoryItem>
  </div>
));
