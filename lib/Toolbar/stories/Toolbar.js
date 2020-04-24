import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { Toolbar } from '../Toolbar';

storiesOf('Components', module).add('Toolbar', () => (
  <StoryItem title="Toolbar" description="The toolbar component">
    <Toolbar>hello</Toolbar>
  </StoryItem>
));
