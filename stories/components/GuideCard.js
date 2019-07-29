import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from '../styleguide/StoryItem';
import Container from '../../lib/GuideCard/Container';
import GuideCard from '../../lib/GuideCard';

const guideCardsData = [
  {
    title: 'Create the first template',
    icon: 'template',
    description: 'Content templates make it easy for people to provide any type of content in the correct format, and style. Whether it’s blog articles, website pages or email newsletter content.',
    cta: { title: '📹 How to use content templates (2:01)', onClick: 
      () => console.log('clicked')}
  }
]
storiesOf('Components', module).add('GuideCard', () => (
  <div>
    <StoryItem title="GuideCard">
	{guideCardsData.map(({icon, title, description, cta}, index) => (
	  <GuideCard.Container icon={icon}>
	      <GuideCard.Body stepNumber={index + 1} title={title} description={description} cta={cta} />
	  </GuideCard.Container>
	))}
    </StoryItem>
  </div>
));
