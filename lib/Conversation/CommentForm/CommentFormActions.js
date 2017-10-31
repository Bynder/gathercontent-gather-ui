import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const CommentFormActions = props => (
  <div className="comment-form__actions">
    <span className="comment-form__actions comment-form__actions--submit">
      <Button types={['danger', 'size-sm']} clickHandler={props.onCancel}>
        Cancel
      </Button>
      <Button
        types={['secondary', 'size-sm']}
        disabled={props.hasValue ? false : true}
        clickHandler={() => {}}
        isSubmit
      >
        Send
      </Button>
    </span>
  </div>
);

CommentFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  hasValue: PropTypes.bool.isRequired
};

export default CommentFormActions;
