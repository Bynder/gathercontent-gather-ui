import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Meta } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const cardStory = storiesOf('Components', module).add('Card', () => {
  const interactive = boolean('Interactive', false, '');
  const selected = boolean('Selected', false, '');
  const highlighted = boolean('Highlighted', false, '');
  const added = boolean('Added', false, '');
  const removed = boolean('Removed', false, '');

  const onClick = interactive ? () => {} : null;

  return (
    <>
      <StoryItem>
        <Card
          onClick={onClick}
          selected={selected}
          highlighted={highlighted}
          added={added}
          removed={removed}
        >
          <Card.Content>
            <Meta>
              <Meta.Heading>Meta example</Meta.Heading>
              <Meta.Text truncate={false}>
                In this example we're using the meta module inside a card
                component.
              </Meta.Text>
            </Meta>
          </Card.Content>
        </Card>
      </StoryItem>
    </>
  );
});

export default cardStory;
