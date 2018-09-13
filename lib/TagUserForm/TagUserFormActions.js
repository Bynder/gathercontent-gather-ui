import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const TagUserFormActions = props => (
  <div className="taguser-form__actions">
    <span className="taguser-form__actions taguser-form__actions--submit">
      <Button
        types={['link', 'size-sm']}
        className="taguser-form__cancel"
        clickHandler={props.onCancel}
      >
        {props.cancelText}
      </Button>
      <Button
        types={['primary', 'size-sm']}
        className="taguser-form__button"
        disabled={props.disableSubmit}
        clickHandler={() => {}}
        isSubmit
      >
        {props.submitText}
      </Button>
    </span>
  </div>
);

TagUserFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  cancelText: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired
};

export default TagUserFormActions;
