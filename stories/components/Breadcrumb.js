import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, Icon } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Breadcrumb', () => (
  <div>
    <StoryItem
      title="Avatar – base"
      description="A base avatar will fall back to initials if no url prop is passed."
    >
      <Breadcrumb>
        <a href="/">
          <Icon name="home" />
        </a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
      </Breadcrumb>
    </StoryItem>
  </div>
));
