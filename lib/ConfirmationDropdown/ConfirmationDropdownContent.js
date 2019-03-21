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
    ...props
  },
  context
) => {
  const { setShowContent } = context[GATHER_UI_DROPDOWN];
  const sharedButtonProps = ['slim', 'collapse'];

  const confirmButtonTypes = isDanger
    ? [...sharedButtonProps, 'link-danger']
    : [...sharedButtonProps, 'link'];

  return (
    <Dropdown.Content {...props} className="confirmation-dropdown__content">
      {children}

      <div className="confirmation-dropdown__footer">
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
            setShowContent(false);
          }}
          className="confirmation-dropdown__cancel"
        >
          Cancel
        </Button>
      </div>
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
  confirmationText: PropTypes.string
};

ConfirmationDropdownContent.defaultProps = {
  isDanger: false,
  disabled: false,
  promiseIsPending: false,
  hideOnCompletion: true,
  confirmationText: 'Confirm',
  onHide: () => {}
};

export default ConfirmationDropdownContent;
