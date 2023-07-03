import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import { pluralisePerson } from '../helpers';

const MentionsFormActions = (props: any) => {
  const additionalClasses = cx({
    'mention-form__actions--inline': props.editing
  });

  const additionalButtonClasses = cx({
    conversation__meta: props.editing
  });

  const cancelButtonTypes = props.editing ? ['collapse'] : [];
  const submitButtonTypes = props.editing
    ? ['collapse', 'link-default']
    : ['primary'];

  const submitText = props.displayMentionCount
    ? `${props.submitText} & notify ${pluralisePerson(props.mentionCount)}`
    : props.submitText;

  return (
    <div className={`mention-form__actions ${additionalClasses}`}>
      <span className="mention-form__actions mention-form__actions--submit">
        <Button
          types={[...cancelButtonTypes, 'link', 'size-sm']}
          className={`mention-form__cancel ${additionalButtonClasses}`}
          clickHandler={props.onCancel}
        >
          {props.cancelText}
        </Button>
        <Button
          types={[...submitButtonTypes, 'size-sm']}
          className={`mention-form__button ${additionalButtonClasses}`}
          disabled={props.disableSubmit}
          clickHandler={() => {}}
          isSubmit
        >
          {submitText}
        </Button>
      </span>
    </div>
  );
};

MentionsFormActions.propTypes = {
  onCancel: PropTypes.func.isRequired,
  disableSubmit: PropTypes.bool.isRequired,
  editing: PropTypes.bool,
  cancelText: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  mentionCount: PropTypes.number.isRequired,
  displayMentionCount: PropTypes.bool.isRequired
};

MentionsFormActions.defaultProps = {
  editing: false
};

export default MentionsFormActions;
