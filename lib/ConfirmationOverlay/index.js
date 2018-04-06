import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../Button';

const ConfirmationOverlay = props => {
  const classNames = cx(`confirmation-overlay ${props.className}`, {
    'confirmation-overlay--show': props.show
  });

  return (
    <div className={classNames}>
      <div className="confirmation-overlay__inner">
        <Button
          types={['primary', 'size-sm']}
          className="confirmation-overlay__button"
          clickHandler={props.cancel}
        >
          Cancel
        </Button>
        <Button
          types={['danger', 'size-sm']}
          className="confirmation-overlay__button"
          clickHandler={props.confirm}
        >
          {props.confirmationText}
        </Button>
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
