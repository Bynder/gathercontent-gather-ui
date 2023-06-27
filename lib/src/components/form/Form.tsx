import * as React from 'react';
import { bool, func } from 'prop-types';
import cx from 'classnames';
import { FormSubmission } from './FormSubmission';
import { FormSubmitButton } from './FormSubmitButton';
import { FormCancelButton } from './FormCancelButton';
import { FormHelper } from './FormHelper';
import { FormInput } from './FormInput';
import { FormBody } from './FormBody';
import { FormFieldset } from './FormFieldset';
import { FormLegend } from './FormLegend';

export const FormContext = React.createContext({});

export const statuses = {
  idle: 'FORM_STATUS_IDLE',
  processing: 'FORM_STATUS_SUBMITTING',
  failure: 'FORM_STATUS_FAILURE',
  success: 'FORM_STATUS_SUCCESS'
};

const nonSubmittableStatuses = [statuses.processing, statuses.success];

export function Form({
  children,
  onSubmit,
  inline,
  className = '',
  ...rest
}: any) {
  const [status, setStatus] = React.useState(statuses.idle);
  const timeoutRef = React.useRef(0);

  const classNames = cx('form', className, {
    'form-inline': inline
  });

  const sharedState = {
    status,
    setStatus
  };

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();

    if (nonSubmittableStatuses.includes(status)) {
      return;
    }

    clearTimeout(timeoutRef.current);

    try {
      setStatus(statuses.processing);
      await onSubmit(event);
      setStatus(statuses.success);
    } catch (e) {
      setStatus(statuses.failure);
      throw e;
    }
  };

  React.useEffect(() => {
    if (status === statuses.success) {
      timeoutRef.current = setTimeout(() => setStatus(statuses.idle), 2000);
    }
  }, [status]);

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <form onSubmit={handleOnSubmit} className={classNames} {...rest}>
      <FormContext.Provider value={sharedState}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

Form.propTypes = {
  onSubmit: func.isRequired,
  inline: bool
};

Form.defaultProps = {
  inline: false
};

Form.FormContext = FormContext;
Form.Body = FormBody;
Form.Input = FormInput;
Form.Submission = FormSubmission;
Form.SubmitButton = FormSubmitButton;
Form.CancelButton = FormCancelButton;
Form.Helper = FormHelper;
Form.Fieldset = FormFieldset;
Form.Legend = FormLegend;
