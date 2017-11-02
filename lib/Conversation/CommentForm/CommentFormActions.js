import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import Icon from '../../Icon';
import cx from 'classnames';

const CommentFormActions = props => {
  const additionalClasses = cx({
    'is-submitting': props.submitting
  });
  return (
    <div className={`comment-form__actions ${additionalClasses}`}>
      <span className="comment-form__actions comment-form__actions--submit">
        {!props.submitting &&
          <Button
          types={['danger', 'size-sm']}
          clickHandler={props.onCancel}
          >
            Cancel
          </Button>
        }
        <Button
          types={['secondary', 'size-sm']}
          disabled={!props.hasValue || props.submitting}
          clickHandler={() => {}}
          isSubmit
        >
          {props.submitting ? (
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
  submitting: PropTypes.bool.isRequired
};

export default CommentFormActions;
