import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Icon from '../../Icon';

const CommentFormActions = props => {
  const additionalClasses = cx({
    'is-submitting': props.isSubmitting
  });
  return (
    <div className={`comment-form__actions ${additionalClasses}`}>
      <span className="comment-form__actions comment-form__actions--submit">
        {!props.isSubmitting && (
          <Button types={['danger', 'size-sm']} clickHandler={props.onCancel}>
            Cancel
          </Button>
        )}
        <Button
          types={['secondary', 'size-sm']}
          disabled={!props.hasValue || props.isSubmitting}
          clickHandler={() => {}}
          isSubmit
        >
          {props.isSubmitting ? <Icon name="loader" /> : 'Send'}
        </Button>
      </span>
    </div>
  );
};

CommentFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  hasValue: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired
};

export default CommentFormActions;
