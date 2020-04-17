import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonBase } from '../ButtonBase';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('NewButton', () => (
  <div>
    <StoryItem title="Button" description="">
      <div>
        <ButtonBase />
      </div>
    </StoryItem>
  </div>
));
