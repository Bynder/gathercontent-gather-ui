import React from 'react';
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
  className,
  show
}) => {
  const [isSubmitting, handleSubmitWithLoader] = useLoader(confirm);

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
          {confirmationText}
          {isSubmitting && <Icon name="loader16" className="ml-2 fill-white" />}
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
  show: PropTypes.bool
};

ConfirmationOverlay.defaultProps = {
  className: '',
  confirmationText: 'Confirm',
  show: false
};

export default ConfirmationOverlay;
