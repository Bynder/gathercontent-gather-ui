import * as React from 'react';
import { FormSubmission } from './FormSubmission';

export const FormContext = React.createContext({});

export const statuses = {
  idle: 'FORM_STATUS_IDLE',
  processing: 'FORM_STATUS_SUBMITTING',
  failure: 'FORM_STATUS_FAILURE',
  success: 'FORM_STATUS_SUCCESS'
};

export function Form({ children, onSubmit, className = '', ...rest }) {
  const [status, setStatus] = React.useState(statuses.idle);
  const timeoutRef = React.useRef(0);

  const sharedState = {
    status,
    setStatus
  };

  const onSub = async event => {
    event.preventDefault();

    if (status === statuses.processing) {
      return;
    }

    try {
      setStatus(statuses.processing);
      await onSubmit();
      setStatus(statuses.success);
    } catch (e) {
      setStatus(statuses.failure);
    }
  };

  React.useEffect(() => {
    if (status === statuses.success) {
      timeoutRef.current = setTimeout(() => setStatus(statuses.idle), 3000);
    }
  }, [status]);

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <form onSubmit={onSub} className={`form ${className}`} {...rest}>
      <FormContext.Provider value={sharedState}>
        {children}
      </FormContext.Provider>
    </form>
  );
}

Form.FormContext = FormContext;
Form.Submission = FormSubmission;
