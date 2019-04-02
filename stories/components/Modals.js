import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import {
  Modal,
  Button,
  ConfirmationModal,
  withModalTrigger,
  FormModal, StatusIndicator, DueDatePicker
} from "../../lib";
import StoryItem from '../styleguide/StoryItem';

const ModalTrigger = withModalTrigger({ children: 'Show Modal' });

class StatefulFormModal extends Component {
  state = {
    formIsSubmitting: false
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({ formIsSubmitting: true });
    action('submit')(e);

    // asynchronous event, eg. HTTP request
    setTimeout(() => {
      this.setState({ formIsSubmitting: false });
      action('submitHandlerReturned')();
    }, 2000);
  };

  render() {
    return (
      <FormModal
        {...this.props}
        formIsSubmitting={this.state.formIsSubmitting}
        submitHandler={this.submitHandler}
      />
    );
  }
}

storiesOf('Components', module).add('Modals', () => (
  <div>
    <StoryItem
      title="Full Modal"
      description="A modal has a header, footer and a content section."
    >
      <ModalTrigger>
        <Modal.Container>
          <Modal.Header>Hello</Modal.Header>
          <Modal.Body className="has-columns">
            <Row>
              <Col
                className="modal__column-wrapper modal__column-wrapper--highlight"
                xs={6}
              >
                <div className="modal__column">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident
                </div>
              </Col>
              <Col className="modal__column-wrapper" xs={6}>
                <div className="modal__column">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button types={['link']} clickHandler={action('clickHandler')}>
              Cancel
            </Button>
            <Button types={['primary']} clickHandler={action('clickHandler')}>
              Confirm
            </Button>
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
              <Col
                xs={12}
                sm={6}
                className="modal__column-wrapper modal__column-wrapper--highlight"
              >
                <div className="modal__column">
                  <h2 className="modal__body-title">Lorem ipsum dolor</h2>
                </div>
              </Col>
              <Col xs={12} sm={6} className="modal__column-wrapper">
                <div className="modal__column">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="modal__illustration">
                    <div
                      style={{
                        background: 'grey',
                        height: '100px',
                        color: 'white'
                      }}
                    >
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
        <Modal.Container className="modal--center modal--clear" size="small">
          <Modal.Header>Lorem ipsum dolor</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </Modal.Body>
          <Modal.Footer>
            <Button types={['primary']} clickHandler={action('clickHandler')}>
              Confirm
            </Button>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </Modal.Body>
        </Modal.Container>
      </ModalTrigger>
    </StoryItem>

    <StoryItem
      title="Full Screen"
      description="Modals can take up the screen"
    >
      <ModalTrigger>
        <Modal.Container size="full-screen">
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
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
          onHide={() => {}}
          submitCallback={e => {
            action(e);
            e.preventDefault();
          }}
        >
          <StatusIndicator color="#93724f" label="Draft" row softLabel>
            <DueDatePicker
              applyDueDate={() => {}}
              removeDueDate={() => {}}
              autoPosition
              row
            >
              20th Feb 2019
            </DueDatePicker>
          </StatusIndicator>
          <StatusIndicator color="green" label="Publishing" row softLabel>
            <DueDatePicker
              applyDueDate={() => {}}
              removeDueDate={() => {}}
              autoPosition
              row
            >
              20th Feb 2019
            </DueDatePicker>
          </StatusIndicator>
        </ConfirmationModal>
      </ModalTrigger>
    </StoryItem>

    <StoryItem
      title="Overflow Modal"
      description="A modal which has content that overflows the screen."
    >
      <ModalTrigger>
        <Modal.Container overflow>
          <Modal.Header>Hello</Modal.Header>
          <Modal.Body className="has-columns">
            <Row>
              <Col
                className="modal__column-wrapper modal__column-wrapper--highlight"
                xs={6}
              >
                <div className="modal__column">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident
                </div>
              </Col>
              <Col className="modal__column-wrapper" xs={6}>
                <div className="modal__column">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button types={['link']} clickHandler={action('clickHandler')}>
              Cancel
            </Button>
            <Button types={['primary']} clickHandler={action('clickHandler')}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal.Container>
      </ModalTrigger>
    </StoryItem>

    <StoryItem
      title="FormModal"
      description="A modal which can contain a form. It has a progress button to indicate progress while submitting"
    >
      <ModalTrigger>
        <StatefulFormModal
          title="FormModal example"
          submitText="Submit"
          cancelText="Cancel"
          highlight
        >
          <FormGroup>
            <ControlLabel>Field A</ControlLabel>
            <FormControl />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Field B</ControlLabel>
            <FormControl />
          </FormGroup>
        </StatefulFormModal>
      </ModalTrigger>
    </StoryItem>
  </div>
));
