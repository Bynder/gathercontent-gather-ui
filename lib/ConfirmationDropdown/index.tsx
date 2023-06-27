import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Dropdown from '../Dropdown';
import ConfirmationDropdownContent from './ConfirmationDropdownContent';

class ConfirmationDropdown extends Component {
  state = {
    promiseIsPending: false
  };

  hide = () => {
    if (this.props.hideOnCompletion) {
      this.setState({ promiseIsPending: false });
      this.props.onHide();
    }
  };

  onConfirm = () => {
    if (this.state.promiseIsPending) {
      return this;
    }

    this.setState({ promiseIsPending: true });
    return this.props
      .confirmationPromise()
      .then(this.hide)
      .catch(this.hide);
  };

  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      'is-pending': this.state.promiseIsPending,
      'confirmation-dropdown--is-dangerous': this.props.isDanger
    });

    const { autoPosition, ...position } = this.props.position;

    return (
      <Dropdown
        id={this.props.id}
        className={classNames}
        persistShow={this.state.promiseIsPending}
        onHide={this.hide}
        autoPosition={autoPosition}
      >
        <ConfirmationDropdownContent
          {...this.props}
          {...this.state}
          {...position}
          onConfirm={this.onConfirm}
          onCompletion={this.props.onCompletion}
        >
          {this.props.dropdownContent}
        </ConfirmationDropdownContent>
        <Dropdown.Trigger data-testid={`${this.props.id}-trigger`}>
          {this.props.children}
        </Dropdown.Trigger>
      </Dropdown>
    );
  }
}

ConfirmationDropdown.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownContent: PropTypes.node.isRequired,
  confirmationPromise: PropTypes.func.isRequired,
  onHide: PropTypes.func,
  hideOnCompletion: PropTypes.bool,
  className: PropTypes.string,
  isDanger: PropTypes.bool,
  disabled: PropTypes.bool,
  confirmationText: PropTypes.string,
  position: PropTypes.shape(),
  onCancel: PropTypes.func,
  secondaryAction: PropTypes.node,
  onCompletion: PropTypes.func
};

ConfirmationDropdown.defaultProps = {
  className: '',
  isDanger: false,
  disabled: false,
  hideOnCompletion: true,
  confirmationText: 'Confirm',
  onHide: () => {},
  position: {
    autoPosition: true
  },
  onCancel: () => {},
  secondaryAction: null,
  onCompletion: () => {}
};

export default ConfirmationDropdown;
