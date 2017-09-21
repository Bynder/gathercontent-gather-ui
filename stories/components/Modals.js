import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Modal, Button, ConfirmationModal, withModalTrigger } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const ModalTrigger = withModalTrigger({ children: 'Show Modal' });

storiesOf('Components', module)
  .add('Modals', () => (
    <div>
      <StoryItem
        title="Full Modal"
        description="A modal has a header, footer and a content section."
      >
        <ModalTrigger>
          <Modal.Container>
            <Modal.Header>
              Hello
            </Modal.Header>
            <Modal.Body className="has-columns">
              <Row>
                <Col
                  className="modal__column-wrapper modal__column-wrapper--highlight"
                  xs={6}
                >
                  <div className="modal__column">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  </div>
                </Col>
                <Col
                  className="modal__column-wrapper"
                  xs={6}
                >
                  <div className="modal__column">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button types={['link']} clickHandler={action('clickHandler')}>Cancel</Button>
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
            <Modal.Body className="has-columns">
              <Row className="modal__row">
                <Col xs={6} className="modal__column-wrapper modal__column-wrapper--highlight">
                  <div className="modal__column">
                    <h2 className="modal__body-title">Lorem ipsum dolor</h2>
                  </div>
                </Col>
                <Col xs={6} className="modal__column-wrapper">
                  <div className="modal__column">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="modal__illustration">
                      <div style={{ background: 'grey', height: '100px', color: 'white' }}>
                        Illustration goes here
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Centered & Cleared"
        description="A modal that has its content centered and the backgrounds/borders cleared."
      >
        <ModalTrigger>
          <Modal.Container
            className="modal--center modal--clear"
            size="small"
          >
            <Modal.Header>
              Lorem ipsum dolor
            </Modal.Header>
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </Modal.Body>
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
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </Modal.Body>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Extra Large"
        description="Modals can be extra large width!"
      >
        <ModalTrigger>
          <Modal.Container size="x-large">
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </Modal.Body>
          </Modal.Container>
        </ModalTrigger>
      </StoryItem>

      <StoryItem
        title="Confirmation Modal"
        description="A toggle component that can be used to toggle options on and off."
      >
        <ModalTrigger>
          <ConfirmationModal
            title="Are you sure?"
            submitText="Hell yes"
            cancelText="Meow no"
            type="primary"
            submitCallback={(e) => {
              action(e);
              e.preventDefault();
            }}
          >
            That kittens are just as awesome as dogs?
          </ConfirmationModal>
        </ModalTrigger>
      </StoryItem>
    </div>
  ));
