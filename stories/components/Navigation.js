import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { MenuItem } from 'react-bootstrap/lib';
import { Navigation } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Navigation', () => (
  <div>
    <StoryItem
      title="Nav Tabs"
      description="An inline tabbed navigation to be used across the whole site."
    >
      <Navigation>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </Navigation>
    </StoryItem>
  </div>
));
