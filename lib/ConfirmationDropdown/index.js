import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon, Dropdown } from '../';

const initialState = {
  promiseIsPending: false,
  forceHide: false
};

class ConfirmationDropdown extends Component {
  state = initialState;

  resetState = () => this.setState(initialState);

  onConfirm = () => {
    if (this.state.promiseIsPending) {
      return this;
    }

    this.setState({ promiseIsPending: true });
    return this.props.confirmationPromise().then(this.resetState);
  };

  onCancel = () => {
    this.setState({ forceHide: true }, this.resetState);
  };

  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      'is-pending': this.state.promiseIsPending
    });

    const sharedButtonProps = ['slim', 'collapse'];

    const confirmButtonTypes = this.props.isDanger
      ? [...sharedButtonProps, 'link-danger']
      : sharedButtonProps;

    return (
      <Dropdown
        id={this.props.id}
        className={classNames}
        show={this.state.promiseIsPending}
        hide={this.state.forceHide}
        autoPosition
      >
        <Dropdown.Content>
          {this.props.dropdownContent}

          <div className="confirmation-dropdown__footer">
            <Icon
              name="loader"
              className="confirmation-dropdown__loader"
              aria-hidden={!this.state.promiseIsPending}
            />

            <Button
              types={confirmButtonTypes}
              clickHandler={this.onConfirm}
              className="confirmation-dropdown__confirm-trigger"
              aria-hidden={this.state.promiseIsPending}
            >
              {this.props.confirmationText}
            </Button>

            <Button
              types={sharedButtonProps}
              clickHandler={this.onCancel}
              className="confirmation-dropdown__cancel"
            >
              Cancel
            </Button>
          </div>
        </Dropdown.Content>

        <Dropdown.Trigger>{this.props.children}</Dropdown.Trigger>
      </Dropdown>
    );
  }
}

ConfirmationDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownContent: PropTypes.node.isRequired,
  confirmationPromise: PropTypes.func.isRequired,
  className: PropTypes.string,
  isDanger: PropTypes.bool,
  confirmationText: PropTypes.string
};

ConfirmationDropdown.defaultProps = {
  className: '',
  isDanger: false,
  confirmationText: 'Confirm'
};

export default ConfirmationDropdown;
