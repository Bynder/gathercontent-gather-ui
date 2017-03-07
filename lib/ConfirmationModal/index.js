import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import { Button, ProgressButton } from '../index';

class ConfirmationModal extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.node.isRequired,
    submitText: PropTypes.string.isRequired,
    cancelText: PropTypes.string.isRequired,
    type: PropTypes.string,
    show: PropTypes.bool,
  };

  static defaultProps = {
    title: 'Delete',
    message: 'Are you sure?',
    submitText: 'Delete',
    cancelText: 'Cancel',
    type: 'primary',
    show: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      show: props.show || false,
      callback: null,
    };

    this.hideModal = this.hideModal.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

  hideModal(e) {
    if (e) e.preventDefault();

    this.resetModal();
  }

  showModal(callback) {
    this.setState({
      show: true,
      callback,
    });
  }

  submitCallback(e) {
    if (e) e.preventDefault();

    if (this.state.callback !== null) {
      this.state.callback();
    }
  }

  resetModal() {
    this.setState({
      show: false,
      callback: null,
    });
  }

  render() {
    const { title, message, submitText, type, cancelText } = this.props;

    return (
      <Modal
        className="modal--no-padding"
        show={this.state.show}
        onHide={this.hideModal}
      >
        <form onSubmit={this.submitCallback}>
          <Modal.Header>
            <button type="button" className="close" onClick={this.hideModal}><span>×</span></button>
            <Modal.Title>{ title }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            { message }
          </Modal.Body>
          <Modal.Footer>
            <Button
              types={['link']}
              clickHandler={this.hideModal}
            >
              { cancelText }
            </Button>
            <ProgressButton clickHandler={this.submitCallback} type={type} value={submitText} />
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default ConfirmationModal;
