import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';
import { Modal } from './Modal';
import { NavigationItem } from '../../modules/navigationItems/NavigationItem';
import { NavigationItems } from '../../modules/navigationItems/NavigationItems';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const modalStory = storiesOf('Components', module).add('Modal', () => {
  const label = 'Select Modal';
  const options = {
    Empty: 'Empty',
    ModalFooterConfirm: 'modalFooterConfirm',
    ModalHeaderTabs: 'modalHeaderTabs'
  };
  const defaultValue = 'Empty';
  const groupId = 'GROUP-ID1';

  const value = radios(label, options, defaultValue, groupId);

  return (
    <div className="h-screen bg-blue-80">
      <StoryItem>
        <Modal show={value === 'Empty'} size="large">
          <Modal.Header headerText="Header" />
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>Footer</Modal.Footer>
        </Modal>
      </StoryItem>
      <StoryItem>
        <Modal show={value === 'modalFooterConfirm'} size="large">
          <Modal.FooterConfirm
            confirmText="Lorem ipsum dolor sit amet."
            tertiaryText="Button Text"
            secondaryText="Button Text"
            tertiaryOnClick={actions('Clicked Tertiary')}
            secondaryOnClick={actions('Clicked Secondary')}
          />
        </Modal>
      </StoryItem>
      <StoryItem>
        <Modal show={value === 'modalHeaderTabs'} size="large">
          <Modal.Header
            headerText="Modal title"
            navigationItems={
              <NavigationItems defaultTabId="tab-1" srLabel="Modal Header Tabs">
                <NavigationItem id="tab-1">Tab Name</NavigationItem>
                <NavigationItem id="tab-2">Tab Name</NavigationItem>
              </NavigationItems>
            }
          />
        </Modal>
      </StoryItem>
    </div>
  );
});

export default modalStory;
