import React, { Component } from 'react';
import Button from '../Button';
import Modal from 'react-bootstrap/lib/Modal';
import AjaxButton from '../ProgressButton';

class ConfirmationModal extends Component {
  constructor(props) {
    super(props);

    this.state = { show: props.show || false, callback: null };

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
    e.preventDefault();

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
              clickHandler={this.hideModal}>
              { cancelText }
            </Button>
            <AjaxButton clickHandler={this.submitCallback} type={type} value={submitText} />
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

ConfirmationModal.propTypes = {
  title: React.PropTypes.string.isRequired,
  message: React.PropTypes.node.isRequired,
  submitText: React.PropTypes.string.isRequired,
  cancelText: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
};

ConfirmationModal.defaultProps = {
  title: 'Delete',
  message: 'Are you sure?',
  submitText: 'Delete',
  cancelText: 'Cancel',
  type: 'primary',
};

export default ConfirmationModal;
