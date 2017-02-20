import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Modal from '../../lib/Modal/';
import Button from '../../lib/Button/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Modals', () => {
    return (
      <div>
        <StoryItem
          title="2 Column Modal"
          description="A modal divided into two sections">
          <Modal.Modal show contentOnly>
            <Modal.ModalHeader>Hello</Modal.ModalHeader>
            <Modal.ModalContent>
              <Modal.ModalColumn>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.ModalColumn>
              <Modal.ModalColumn>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.ModalColumn>
            </Modal.ModalContent>
            <Modal.ModalFooter>
              <Button value="Confirm"></Button>
            </Modal.ModalFooter>
          </Modal.Modal>
        </StoryItem>
      </div>
    );
  });
