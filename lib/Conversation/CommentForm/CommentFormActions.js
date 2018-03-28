import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Icon from '../../Icon';

const CommentFormActions = props => {
  const additionalClasses = cx({
    'is-submitting': props.isSubmitting,
    'comment-form__actions--inline': props.editing
  });

  const additionalButtonClasses = cx({
    conversation__meta: props.editing
  });

  const submit = props.editing ? 'Save' : 'Send';
  const cancelButtonTypes = props.editing ? ['collapse'] : [];
  const submitButtonTypes = props.editing
    ? ['collapse', 'link-default']
    : ['primary'];

  return (
    <div className={`comment-form__actions ${additionalClasses}`}>
      <span className="comment-form__actions comment-form__actions--submit">
        {!props.isSubmitting && (
          <Button
            types={[...cancelButtonTypes, 'link', 'size-sm']}
            className={`comment-form__cancel ${additionalButtonClasses}`}
            clickHandler={props.onCancel}
          >
            Cancel
          </Button>
        )}
        <Button
          types={[...submitButtonTypes, 'size-sm']}
          className={`comment-form__button ${additionalButtonClasses}`}
          disabled={!props.hasValue || props.isSubmitting}
          clickHandler={() => {}}
          isSubmit
        >
          {props.isSubmitting ? <Icon name="loader" /> : submit}
        </Button>
      </span>
    </div>
  );
};

CommentFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  hasValue: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  editing: PropTypes.bool
};

CommentFormActions.defaultProps = {
  editing: false
};

export default CommentFormActions;
