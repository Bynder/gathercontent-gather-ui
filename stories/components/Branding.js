import React from 'react';
import { storiesOf } from '@storybook/react';
import Branding from '../../lib/Branding';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Branding', () => (
  <div>
    <StoryItem title="Default Logo" description="A wrapper around the logo">
      <div>
        <Branding />
      </div>
    </StoryItem>

    <StoryItem title="Custom Logo" description="">
      <Branding url="https://dummyimage.com/150x40/3d8beb/fff.png" alt="Alt Tag" />
    </StoryItem>
  </div>
));
