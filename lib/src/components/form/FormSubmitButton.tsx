import * as React from 'react';
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonPrimary, ButtonSuccess, Icon } from 'lib';
import cx from 'classnames';
import { FormContext, statuses } from './Form';

export function FormSubmitButton({
  children,
  className = '',
  hideSuccessState = false,
  ...rest
}: any) {
  const { status } = React.useContext(FormContext);
  const classNames = cx('form-submit-button', className, {
    'form-submit-button-success':
      status === statuses.success && !hideSuccessState
  });
  const isLoading = status === statuses.processing;
  const hasSucceeded = status === statuses.success;

  const ButtonComponent =
    hasSucceeded && !hideSuccessState ? ButtonSuccess : ButtonPrimary;

  return (
    <ButtonComponent
      className={classNames}
      type="submit"
      loading={isLoading}
      disabled={isLoading}
      {...rest}
    >
      {hasSucceeded && !hideSuccessState && (
        <Icon
          name="tick"
          defaultActiveColor={false}
          className="icon--white mr-2 transform scale-150"
        />
      )}
      {children}
    </ButtonComponent>
  );
}

FormSubmitButton.defaultProps = {
  children: 'Submit'
};
