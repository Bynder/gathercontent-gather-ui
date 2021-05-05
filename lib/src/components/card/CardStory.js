import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonSecondary, Card } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Components/Cards', module);
stories.addDecorator(withKnobs);

stories.add('Card', () => {
  const interactive = boolean('Interactive', false, '');
  const selected = boolean('Selected', false, '');
  const highlighted = boolean('Highlighted', false, '');
  const active = boolean('Active', false, '');
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
          active={active}
          size="md"
        >
          <Card.Content>
            <Card.Title>Create the first template</Card.Title>
            <Card.Description>
              Content templates make it easy for people to provide any type of
              content in the correct format, and style. Whether it’s blog
              articles, website pages or email newsletter content.
            </Card.Description>
            <Card.Footer>
              <ButtonSecondary>Create a template</ButtonSecondary>
            </Card.Footer>
          </Card.Content>
        </Card>
      </StoryItem>
    </>
  );
});
