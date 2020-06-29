import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ButtonPrimary, ButtonPrimaryDanger, ButtonTertiary } from 'lib';

const ConfirmationOverlay = props => {
  const classNames = cx(`confirmation-overlay ${props.className}`, {
    'confirmation-overlay--show': props.show
  });

  return (
    <div className={classNames}>
      <div className="confirmation-overlay__inner">
        <ButtonTertiary
          size={ButtonTertiary.sizes.xs}
          onClick={props.cancel}
          className="mr-2 text-sm"
        >
          Cancel
        </ButtonTertiary>
        <ButtonPrimaryDanger
          onClick={props.confirm}
          size={ButtonPrimary.sizes.xs}
        >
          {props.confirmationText}
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
