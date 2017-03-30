import React, { Component, PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

class ModalCustom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: this.shouldDisplayModal(),
      callback: null,
    };

    this.hideModal = this.hideModal.bind(this);
    this.submitCallback = this.submitCallback.bind(this);
  }

  shouldDisplayModal() {
    return this.props.show;
  }

  hideModal(e) {
    if (e) e.preventDefault();

    this.resetModal();
  }

  showModal(callback) {
    this.setState({ show: true, callback });
  }

  submitCallback(e) {
    e.preventDefault();
    this.state.callback();
  }

  resetModal() {
    this.setState({ show: false, callback: null });
  }

  renderContentOnly(size) {
    let classNames;

    switch (size) {
      case 'x-large':
        classNames = ['modal--no-padding', 'modal--x-large'].join(' ');
        break;
      case 'large':
        classNames = ['modal--no-padding', 'modal--large'].join(' ');
        break;
      default:
        classNames = [''];
        break;
    }

    return (
      <Modal className={classNames} {...this.props}>
        { this.props.children }
      </Modal>
    );
  }

  render() {
    const { size, contentOnly } = this.props;

    if (contentOnly) {
      return this.renderContentOnly(size);
    }

    return (
      <Modal className="modal--no-padding" {...this.props}>
        <form onSubmit={this.submitCallback}>
          <Modal.Body>
            { this.props.children }
          </Modal.Body>
        </form>
      </Modal>
    );
  }
}

ModalCustom.defaultProps = {
  show: false,
  size: '',
  contentOnly: false,
};

ModalCustom.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  contentOnly: PropTypes.bool,
};

export default ModalCustom;
