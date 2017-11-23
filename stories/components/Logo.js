import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../../lib/Logo';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Logo', () => (
  <div>
    <StoryItem title="Default Logo" description="A wrapper around the logo">
      <div>
        <Logo />
      </div>
    </StoryItem>

    <StoryItem title="Custom Logo" description="">
      <Logo url="https://dummyimage.com/150x40/3d8beb/fff.png" alt="Alt Tag" />
    </StoryItem>
  </div>
));
