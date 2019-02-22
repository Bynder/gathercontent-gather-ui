import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon, Dropdown } from '../';

class ConfirmationDropdown extends Component {
  state = {
    promiseIsPending: false
  };

  onConfirm = () => {
    if (this.state.promiseIsPending) {
      return this;
    }

    this.setState({ promiseIsPending: true });
    return this.props.confirmationPromise().then(() => {
      this.setState({
        promiseIsPending: false
      });
    });
  };

  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      'is-pending': this.state.promiseIsPending
    });

    const confirmButtonTypes = this.props.isDanger
      ? ['link-danger', 'slim', 'collapse']
      : ['slim', 'collapse'];

    return (
      <Dropdown
        id={this.props.id}
        className={classNames}
        show={this.state.promiseIsPending}
        autoPosition
      >
        <Dropdown.Content>
          {this.props.dropdownContent}

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
