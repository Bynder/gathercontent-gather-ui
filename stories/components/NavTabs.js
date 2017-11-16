import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MenuItem } from 'react-bootstrap/lib';
import { NavTabs } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Nav Tabs', () => (
  <div>
    <StoryItem
      title="Nav Tabs"
      description="An inline tabbed navigation to be used across the whole site."
    >
      <NavTabs>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </NavTabs>
    </StoryItem>
  </div>
));
