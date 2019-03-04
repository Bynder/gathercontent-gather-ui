import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Dropdown } from '../';
import ConfirmationDropdownContent from './ConfirmationDropdownContent';

class ConfirmationDropdown extends Component {
  state = {
    promiseIsPending: false
  };

  onConfirm = () => {
    if (this.state.promiseIsPending) {
      return this;
    }

    this.setState({ promiseIsPending: true });
    return this.props
      .confirmationPromise()
      .then(() => {
        this.setState({ promiseIsPending: false }, this.props.onPromiseResolve);
      })
      .catch(() => {
        this.setState({ promiseIsPending: false }, this.props.onPromiseReject);
      });
  };

  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      'is-pending': this.state.promiseIsPending
    });

    return (
      <Dropdown
        id={this.props.id}
        className={classNames}
        persistShow={this.state.promiseIsPending}
        autoPosition
      >
        <ConfirmationDropdownContent
          {...this.props}
          {...this.state}
          onConfirm={this.onConfirm}
        >
          {this.props.dropdownContent}
        </ConfirmationDropdownContent>
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
  onPromiseResolve: PropTypes.func,
  onPromiseReject: PropTypes.func,
  onHide: PropTypes.func,
  className: PropTypes.string,
  isDanger: PropTypes.bool,
  disabled: PropTypes.bool,
  confirmationText: PropTypes.string
};

ConfirmationDropdown.defaultProps = {
  className: '',
  isDanger: false,
  disabled: false,
  confirmationText: 'Confirm',
  onHide: () => {},
  onPromiseResolve: () => {},
  onPromiseReject: () => {}
};

export default ConfirmationDropdown;
