import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  ButtonPrimary,
  ButtonPrimaryDanger,
  ButtonTertiary,
  useLoader
} from 'lib';
import Icon from '../Icon';

const ConfirmationOverlay = ({
  confirm,
  cancel,
  confirmationText,
  failureText,
  className,
  show
}) => {
  const [hasFailed, setHasFailed] = useState(false);
  const setHasFailedTimeout = useRef(null);

  const handleConfirm = async () => {
    try {
      await confirm();
    } catch (error) {
      setHasFailed(true);
      setHasFailedTimeout.current = setTimeout(() => setHasFailed(false), 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (setHasFailedTimeout.current !== null) {
        clearTimeout(setHasFailedTimeout.current);
      }
    };
  });

  const [isSubmitting, handleSubmitWithLoader] = useLoader(handleConfirm);

  const classNames = cx(`confirmation-overlay ${className}`, {
    'confirmation-overlay--show': show
  });

  return (
    <div className={classNames}>
      <div className="confirmation-overlay__inner">
        <ButtonTertiary
          size={ButtonTertiary.sizes.xs}
          onClick={cancel}
          className="mr-2 text-sm"
        >
          Cancel
        </ButtonTertiary>
        <ButtonPrimaryDanger
          onClick={handleSubmitWithLoader}
          size={ButtonPrimary.sizes.xs}
        >
          {isSubmitting && <Icon name="loader16" className="mr-2 fill-white" />}
          {hasFailed && <Icon name="danger16" className="mr-2 fill-white" />}
          {!hasFailed ? confirmationText : failureText}
        </ButtonPrimaryDanger>
      </div>
    </div>
  );
};

ConfirmationOverlay.propTypes = {
  cancel: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  className: PropTypes.string,
  confirmationText: PropTypes.string,
  show: PropTypes.bool,
  failureText: PropTypes.string
};

ConfirmationOverlay.defaultProps = {
  className: '',
  confirmationText: 'Confirm',
  show: false,
  failureText: ''
};

export default ConfirmationOverlay;
