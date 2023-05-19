import * as React from 'react';
import { ButtonPrimary, ButtonSuccess, Icon } from 'lib';
import cx from 'classnames';
import { FormContext, statuses } from './Form';

export function FormSubmitButton({ children, className = '', ref, ...rest }) {
  const { status } = React.useContext(FormContext);
  const classNames = cx('form-submit-button', className, {
    'form-submit-button-success': status === statuses.success
  });
  const isLoading = status === statuses.processing;
  const hasSucceeded = status === statuses.success;

  const ButtonComponent = hasSucceeded ? ButtonSuccess : ButtonPrimary;

  return (
    <ButtonComponent
      className={classNames}
      type="submit"
      loading={isLoading}
      disabled={isLoading}
      ref={ref}
      {...rest}
    >
      {hasSucceeded && (
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
