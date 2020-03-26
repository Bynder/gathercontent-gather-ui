import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';
import TooltipWrapper from '../TooltipWrapper';
import { GATHER_UI_DROPDOWN } from '../Dropdown/consts';
import DropdownContent from '../Dropdown/DropdownContent';
import DropdownFooter from '../Dropdown/DropdownFooter';

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
    secondaryAction,
    actionTooltip,
    onCompletion,
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
    <DropdownContent {...props}>
      {children}

      <DropdownFooter>
        <Icon
          name="loader"
          className="confirmation-dropdown__loader"
          aria-hidden={!promiseIsPending}
        />
        <TooltipWrapper
          id="confirmation-dropdown-tooltip"
          tooltipText={actionTooltip}
          placement="top"
        >
          <Button
            types={confirmButtonTypes}
            clickHandler={() =>
              onConfirm()
                .then(() => {
                  if (hideOnCompletion) {
                    setShowContent(false);
                  }
                })
                .then(onCompletion)
            }
            className="confirmation-dropdown__confirm-trigger"
            aria-hidden={promiseIsPending}
            disabled={disabled}
          >
            {confirmationText}
          </Button>
        </TooltipWrapper>
        {secondaryAction || (
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
        )}
      </DropdownFooter>
    </DropdownContent>
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
  onCancel: PropTypes.func,
  secondaryAction: PropTypes.node,
  actionTooltip: PropTypes.string,
  onCompletion: PropTypes.func.isRequired
};

ConfirmationDropdownContent.defaultProps = {
  isDanger: false,
  disabled: false,
  promiseIsPending: false,
  hideOnCompletion: true,
  confirmationText: 'Confirm',
  onHide: () => {},
  onCancel: () => {},
  secondaryAction: null,
  actionTooltip: ''
};

export default ConfirmationDropdownContent;
