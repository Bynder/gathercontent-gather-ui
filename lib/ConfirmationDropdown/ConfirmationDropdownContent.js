import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dropdown, Icon } from '../index';
import { GATHER_UI_DROPDOWN } from '../Dropdown';

const ConfirmationDropdownContent = (
  {
    isDanger,
    children,
    promiseIsPending,
    onConfirm,
    disabled,
    confirmationText,
    onHide,
    hideOnCompletion,
    onCancel,
    ...props
  },
  context
) => {
  const { setShowContent } = context[GATHER_UI_DROPDOWN];
  const sharedButtonProps = ['slim', 'collapse'];

  const confirmButtonTypes = isDanger
    ? [...sharedButtonProps, 'link-danger']
    : [...sharedButtonProps, 'link-default'];

  return (
    <Dropdown.Content {...props}>
      {children}

      <Dropdown.Footer>
        <Icon
          name="loader"
          className="confirmation-dropdown__loader"
          aria-hidden={!promiseIsPending}
        />

        <Button
          types={confirmButtonTypes}
          clickHandler={() =>
            onConfirm().then(() => {
              if (hideOnCompletion) {
                setShowContent(false);
              }
            })
          }
          className="confirmation-dropdown__confirm-trigger"
          aria-hidden={promiseIsPending}
          disabled={disabled}
        >
          {confirmationText}
        </Button>

        <Button
          types={sharedButtonProps}
          clickHandler={() => {
            onHide();
            onCancel();
            setShowContent(false);
          }}
          className="confirmation-dropdown__cancel"
        >
          Cancel
        </Button>
      </Dropdown.Footer>
    </Dropdown.Content>
  );
};

ConfirmationDropdownContent.contextTypes = {
  [GATHER_UI_DROPDOWN]: PropTypes.shape().isRequired
};

ConfirmationDropdownContent.propTypes = {
  children: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onHide: PropTypes.func,
  isDanger: PropTypes.bool,
  disabled: PropTypes.bool,
  hideOnCompletion: PropTypes.bool,
  promiseIsPending: PropTypes.bool,
  confirmationText: PropTypes.string,
  onCancel: PropTypes.func
};

ConfirmationDropdownContent.defaultProps = {
  isDanger: false,
  disabled: false,
  promiseIsPending: false,
  hideOnCompletion: true,
  confirmationText: 'Confirm',
  onHide: () => {},
  onCancel: () => {}
};

export default ConfirmationDropdownContent;
