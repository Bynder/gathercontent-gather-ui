import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { NavigationItems } from './NavigationItems';
import { NavigationItem } from './NavigationItem';

const stories = storiesOf('Modules', module);

stories.add('Navigation', () => {
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
});
