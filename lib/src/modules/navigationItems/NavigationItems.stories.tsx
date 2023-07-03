import React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from 'stories/styleguide/StoryItem';
import { NavigationItems } from './NavigationItems';
import { NavigationItem } from './NavigationItem';

export default {
  title: 'GUI/Navigation',
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
