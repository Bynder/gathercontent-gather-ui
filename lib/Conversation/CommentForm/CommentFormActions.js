import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Icon from '../../Icon';

const CommentFormActions = props => {
  const isSubmittedClass = props.submitted ? 'is-submitted' : '';

  return (
    <div className={`comment-form__actions ${isSubmittedClass}`}>
      <span className="comment-form__actions comment-form__actions--submit">
        <Button types={['danger', 'size-sm']} clickHandler={props.onCancel}>
          Cancel
        </Button>
        <Button
          types={['secondary', 'size-sm']}
          disabled={!props.hasValue}
          clickHandler={() => {}}
          isSubmit
        >
          {props.submitted && !props.existingConversation ? (
            <Icon name="loader" />
          ) : (
            'Send'
          )}
        </Button>
      </span>
    </div>
  );
};

CommentFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  hasValue: PropTypes.bool.isRequired,
  submitted: PropTypes.bool.isRequired,
  existingConversation: PropTypes.bool.isRequired
};

export default CommentFormActions;
