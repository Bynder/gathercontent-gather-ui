import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import MentionIcon from '../../../assets/icons/mention.svg';
import EmojiIcon from '../../../assets/icons/emoji.svg';

const CommentFormActions = props =>
  <div className="form__actions">
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
    >
      <EmojiIcon />
    </Button>

    <span className="form__actions form__actions--has-value-visibility">
      <Button
        types={['danger', 'size-sm']}
        clickHandler={props.onCancel}
      >
        Cancel
      </Button>
      <Button
        types={['secondary', 'size-sm']}
        clickHandler={props.onSubmit}
        isSubmit
      >
        Send
      </Button>
    </span>
  </div>;

CommentFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CommentFormActions;
