import React from 'react';
// @ts-expect-error TS(2305): Module '"../../lib"' has no exported member 'Navig... Remove this comment to see the full error message
import { MenuItem, Navigation as NavigationComponent } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Navigation',
  component: NavigationComponent
};

export const Navigation = () => (
  <>
    <StoryItem
      title="NavigationComponent"
      description="An inline navigation currently used in app TopBar."
    >
      <NavigationComponent>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </NavigationComponent>
    </StoryItem>
    <StoryItem title="Tabs" description="A tabbed navigation.">
      <NavigationComponent tabs>
        <MenuItem href="#" active>
          Items
        </MenuItem>
        <MenuItem href="#">Archived Items</MenuItem>
      </NavigationComponent>
    </StoryItem>
  </>
);

Navigation.parameters = {
  controls: { hideNoControlsWarning: true }
};
