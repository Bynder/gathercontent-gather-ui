import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import Container from '../../lib/GuideCard/Container';
import GuideCard from '../../lib/GuideCard';

storiesOf('Components', module).add('GuideCard', () => (
  <div>
    <StoryItem title="GuideCard">
      <GuideCard.Container icon="template">
	  This is a card
      </GuideCard.Container>
      <GuideCard.Container icon="item">
	  This is a card
      </GuideCard.Container>
    </StoryItem>
  </div>
));
