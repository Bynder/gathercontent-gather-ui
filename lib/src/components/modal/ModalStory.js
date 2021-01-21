import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Modal } from './Modal';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const modalStory = storiesOf('Components', module).add('Modal', () => {
  const showModal = boolean('Trigger Modal', false, '');
  return (
    <>
      <StoryItem>
        <Modal show={showModal}>
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </StoryItem>
    </>
  );
});

export default modalStory;
