import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Modal, Button } from '../../lib';
import withButtonTrigger from '../../lib/Modal/withButtonTrigger';
import StoryItem from '../styleguide/StoryItem';

const ModalTrigger = withButtonTrigger('Show modal');

storiesOf('Components', module)
  .add('Modals', () => (
    <div>
      <StoryItem
        title="Full Modal"
        description="A modal has a header, footer and a content section."
      >
        <ModalTrigger>
          <Modal.Container>
            <Modal.Header closeButton>
              Hello
            </Modal.Header>
            <Modal.Content>
              <Modal.Column>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.Column>
              <Modal.Column>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.Column>
            </Modal.Content>
            <Modal.Footer>
              <Button types={['clear']} clickHandler={action('clickHandler')}>Cancel</Button>
              <Button types={['primary']} clickHandler={action('clickHandler')}>Confirm</Button>
            </Modal.Footer>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Selective Modal"
        description="A modal that shows content and not the header or footer. You can pick whatever sections you do or don't require."
      >
        <ModalTrigger>
          <Modal.Container>
            <Modal.Content>
              <Modal.Column>
                <h2 className="modal__title">Lorem ipsum dolor</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.Column>
              <Modal.Column>
                <div className="modal__illustration">
                  <div style={{ background: 'grey', height: '100px', color: 'white' }}>
                    Illustration goes here
                  </div>
                </div>
              </Modal.Column>
            </Modal.Content>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Centered & Cleared"
        description="A modal that has its content centered and the backgrounds/borders cleared."
      >
        <ModalTrigger>
          <Modal.Container className="modal--center modal--clear" size="small">
            <Modal.Header closeButton>
              <h1 className="modal__title">Start a new project</h1>
            </Modal.Header>
            <Modal.Content>
              <Modal.Column className="modal__column--4-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.Column>
            </Modal.Content>
            <Modal.Footer>
              <Button types={['primary']} clickHandler={action('clickHandler')}>Confirm</Button>
            </Modal.Footer>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Large"
        description="Modals can be larger than normal width."
      >
        <ModalTrigger>
          <Modal.Container size="large">
            <Modal.Content>
              <Modal.Column className="modal__column--4-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.Column>
            </Modal.Content>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Extra Large"
        description="Modals can be extra large width!"
      >
        <ModalTrigger>
          <Modal.Container size="x-large">
            <Modal.Content>
              <Modal.Column className="modal__column--4-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Modal.Column>
            </Modal.Content>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>
    </div>
  ));
