import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import Container from '../../lib/GuideCard/Container';
import GuideCard from '../../lib/GuideCard';

storiesOf('Components', module).add('GuideCard', () => (
  <div>
    <StoryItem title="GuideCard">
      <GuideCard.Container/>
    </StoryItem>
  </div>
));
