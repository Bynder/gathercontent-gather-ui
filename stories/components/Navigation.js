import React from 'react';
import { MenuItem, Navigation } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _Navigation = () => (
  <div>
    <StoryItem
      title="Navigation"
      description="An inline navigation currently used in app TopBar."
    >
      <Navigation>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </Navigation>
    </StoryItem>
    <StoryItem title="Tabs" description="A tabbed navigation.">
      <Navigation tabs>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </Navigation>
    </StoryItem>
  </div>
);
