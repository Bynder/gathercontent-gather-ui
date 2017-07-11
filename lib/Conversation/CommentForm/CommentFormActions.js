import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import MentionIcon from '../../../assets/icons/mention.svg';

const CommentFormActions = props =>
  <div className="comment-form__actions">
    <Button
      clickHandler={() => {}}
      types={['clear', 'size-sm']}
      className="form__button"
    >
      <MentionIcon />
    </Button>
    <Button
      clickHandler={() => {}}
      types={['clear', 'size-sm']}
      className="form__button"
    />

    <span className="comment-form__actions comment-form__actions--submit">
      <Button
        types={['danger', 'size-sm']}
        clickHandler={props.onCancel}
      >
        Cancel
      </Button>
      <Button
        types={['secondary', 'size-sm']}
        clickHandler={() => {}}
        isSubmit
      >
        Send
      </Button>
    </span>
  </div>;

CommentFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default CommentFormActions;
