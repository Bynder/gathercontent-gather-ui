import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon, BoundaryClickWatcher } from '../';

class ConfirmationDropdown extends Component {
  state = {
    showConfirmation: false
  };

  toggleConfirmation = () =>
    this.setState({ showConfirmation: !this.state.showConfirmation });
  onCancel = () => {
    this.props.onCancel();
    this.setState({ showConfirmation: false });
  };
  onConfirm = () => {
    this.props.onConfirm();
    this.setState({ showConfirmation: false });
  };
  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      'is-active': this.state.showConfirmation,
      'is-danger': this.props.isDanger
    });

    return (
      <BoundaryClickWatcher
        className={classNames}
        outsideClickHandler={this.onCancel}
      >
        <div className="confirmation-dropdown__content">
          <div className="confirmation-dropdown__content-child">
            {this.props.children}
          </div>
          <Button types={['link-default', 'slim']} clickHandler={this.onCancel}>
            Cancel
          </Button>
          <Button types={['link-danger', 'slim']} clickHandler={this.onConfirm}>
            {this.props.confirmText}
          </Button>
        </div>
        <Button
          className="confirmation-dropdown__trigger"
          clickHandler={this.toggleConfirmation}
          types={['icon-only']}
        >
          <Icon name={this.props.iconName} />
        </Button>
      </BoundaryClickWatcher>
    );
  }
}

ConfirmationDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  className: PropTypes.string,
  isDanger: PropTypes.bool,
  confirmText: PropTypes.string
};

ConfirmationDropdown.defaultProps = {
  onCancel: () => {},
  className: '',
  isDanger: false,
  confirmText: 'Delete'
};

export default ConfirmationDropdown;
