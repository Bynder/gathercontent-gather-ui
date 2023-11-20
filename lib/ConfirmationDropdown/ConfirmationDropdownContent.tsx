import React, { useContext } from "react";
import Button from "../Button";
import Icon from "../Icon";
import TooltipWrapper from "../TooltipWrapper";
import { DropdownContent } from "../Dropdown/DropdownContent";
import DropdownFooter from "../Dropdown/DropdownFooter";
import { DropdownContext } from "../Dropdown/DropdownProvider";

function ConfirmationDropdownContent({
  id,
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
}: any) {
  const { setShowContent }: any = useContext(DropdownContext);
  const sharedButtonProps = ["slim", "collapse"];

  const confirmButtonTypes = isDanger
    ? [...sharedButtonProps, "link-danger"]
    : [...sharedButtonProps, "link-default"];

  const {
    confirmationPromise,
    onPromiseResolve,
    onPromiseReject,
    dropdownContent,
    ...rest
  } = props;

  return (
    <DropdownContent {...rest}>
      {(showContent: any) =>
        showContent ? (
          <>
            {children}

            <DropdownFooter data-testid={`${id}-footer`}>
              {promiseIsPending && (
                <Icon
                  name="loader"
                  className="gui-confirmation-dropdown__loader"
                  title="Loading icon"
                />
              )}
              <TooltipWrapper
                id="confirmation-dropdown-tooltip"
                tooltipText={actionTooltip}
                placement="top"
              >
                <Button
                  types={confirmButtonTypes}
                  clickHandler={() =>
                    onConfirm().then(() => {
                      if (hideOnCompletion) {
                        setShowContent(false);
                      }

                      onCompletion();
                    })
                  }
                  className="gui-confirmation-dropdown__confirm-trigger"
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
                  className="gui-confirmation-dropdown__cancel"
                >
                  Cancel
                </Button>
              )}
            </DropdownFooter>
          </>
        ) : null
      }
    </DropdownContent>
  );
}

ConfirmationDropdownContent.defaultProps = {
  isDanger: false,
  disabled: false,
  promiseIsPending: false,
  hideOnCompletion: true,
  confirmationText: "Confirm",
  onHide: () => {},
  onCancel: () => {},
  secondaryAction: null,
  actionTooltip: "",
};

export default ConfirmationDropdownContent;
