import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, BoundaryClickWatcher, Icon } from '../';

class ConfirmationDropdown extends Component {
  state = {
    showConfirmation: false,
    promiseIsPending: false
  };

  toggleConfirmation = () =>
    this.setState({ showConfirmation: !this.state.showConfirmation });

  onCancel = () => {
    if (!this.state.promiseIsPending) {
      this.props.onCancel();
      this.setState({ showConfirmation: false });
    }
  };

  onConfirm = () => {
    this.setState({ promiseIsPending: true });
    return this.props.confirmationPromise().then(() => {
      this.setState({
        showConfirmation: false,
        promiseIsPending: false
      });
    });
  };

  render() {
    const classNames = cx(`confirmation-dropdown ${this.props.className}`, {
      'is-active': this.state.showConfirmation,
      'is-danger': this.props.isDanger
    });

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { onClick: this.toggleConfirmation })
    );

    return (
      <BoundaryClickWatcher
        className={classNames}
        outsideClickHandler={this.onCancel}
      >
        <div className="confirmation-dropdown__content">
          <div className="confirmation-dropdown__content-child">
            {this.props.dropdownContent}
          </div>

          {this.state.promiseIsPending ? (
            <Icon name="loader" />
          ) : (
            <Button
              types={['link-danger', 'slim']}
              clickHandler={this.onConfirm}
            >
              {this.props.confirmText}
            </Button>
          )}
        </div>

        {childrenWithProps}
      </BoundaryClickWatcher>
    );
  }
}

ConfirmationDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  dropdownContent: PropTypes.node.isRequired,
  confirmationPromise: PropTypes.func.isRequired,
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
