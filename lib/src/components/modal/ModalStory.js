import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { ButtonSecondary, ButtonTertiary } from 'lib';
import { actions } from '@storybook/addon-actions';
import { Modal } from './Modal';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const modalStory = storiesOf('Components', module).add('Modal', () => {
  const label = 'Select Modal';
  const options = {
    Empty: 'Empty',
    ModalFooterConfirm: 'modalFooterConfirm'
  };
  const defaultValue = 'Empty';
  const groupId = 'GROUP-ID1';

  const value = radios(label, options, defaultValue, groupId);

  return (
    <div className="h-screen bg-blue-80">
      <StoryItem>
        <Modal show={value === 'Empty'} size="large">
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </StoryItem>
      <StoryItem>
        <Modal show={value === 'modalFooterConfirm'} size="large">
          <Modal.FooterConfirm confirmText="Lorem ipsum dolor sit amet.">
            <ButtonTertiary
              size={ButtonTertiary.sizes.sm}
              onClick={actions('Tertiary Clicked')}
              className="mr-2"
            >
              Button Text
            </ButtonTertiary>
            <ButtonSecondary
              size={ButtonSecondary.sizes.sm}
              onClick={actions('Secondary Clicked')}
            >
              Button Text
            </ButtonSecondary>
          </Modal.FooterConfirm>
        </Modal>
      </StoryItem>
    </div>
  );
});

export default modalStory;
