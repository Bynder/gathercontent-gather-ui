import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import StoryItem from '../styleguide/StoryItem';
import GuideCard from '../../lib/GuideCard';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('GuideCard', () => (
  <div>
    <StoryItem title="GuideCard">
      <GuideCard icon={text('Icon Name', 'template')}>
        <GuideCard.Body
          stepNumber={number('Step Number', 1)}
          title={text('Title', 'Create the first template')}
          description={text(
            'Description',
            'Content templates make it easy for people to provide any type of content in the correct format, and style. Whether it’s blog articles, website pages or email newsletter content.'
          )}
          cta={{
            title: text(
              'Body CTA Title',
              '📹 How to use content templates (2:01)'
            ),
            onClick: () => alert('clicked')
          }}
        />
        <GuideCard.CTA
          text={text('CTA Text', 'Create a template')}
          loadingText={text('CTA Loading Text', 'Creating a template...')}
          onClick={() => console.log('hey')}
          isAsync={boolean('CTA isAsync', true)}
        />
      </GuideCard>
    </StoryItem>
  </div>
));
