import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card, Meta } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Modal } from './Modal';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const modalStory = storiesOf('Components', module).add('Modal', () => {
  return (
    <>
      <StoryItem>
        <Modal />
      </StoryItem>
    </>
  );
});

export default cardStory;
