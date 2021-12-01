import React from 'react';
import StoryItem from 'stories/styleguide/StoryItem';
import { NavigationItems } from './NavigationItems';
import { NavigationItem } from './NavigationItem';

export default {
  title: 'src/Navigation',
  component: NavigationItems
};

export const Navigation = () => {
  return (
    <>
      <StoryItem title="Navigation">
        <div className="h-12">
          <NavigationItems defaultTabId="upload" srLabel="Storybook Navigation">
            <NavigationItem id="upload">Upload</NavigationItem>
            <NavigationItem id="project">Project</NavigationItem>
          </NavigationItems>
        </div>
      </StoryItem>
    </>
  );
};

Navigation.parameters = {
  controls: { hideNoControlsWarning: true }
};
