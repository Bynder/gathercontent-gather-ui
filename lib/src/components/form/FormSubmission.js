import * as React from 'react';
import { ButtonPrimary, Icon } from 'lib';
import { FormContext, statuses } from './Form';

export function FormSubmission({ children, className = '', ...rest }) {
  const { status } = React.useContext(FormContext);

  return (
    <div className={`form-submission ${className}`} {...rest}>
      <ButtonPrimary
        type="submit"
        size={ButtonPrimary.sizes.sm}
        loading={status === statuses.processing}
      >
        {status === statuses.success && (
          <Icon name="tick" className="icon--white mr-2" />
        )}
        Submit
      </ButtonPrimary>
    </div>
  );
}
