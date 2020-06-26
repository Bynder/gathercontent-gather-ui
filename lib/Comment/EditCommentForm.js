import React, { useState, useRef, useContext, useEffect } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Mention, MentionsInput } from 'react-mentions';
import cx from 'classnames';
import {
  Comment,
  Avatar,
  AvatarInformation,
  ShortcutTrigger,
  ButtonLink,
  ButtonSecondary,
  ButtonPrimary,
  useLoader
} from 'lib';
import Icon from '../Icon';
import { CommentFailed } from './CommentFailed';

function EditCommentForm({
  children,
  users,
  placeholder,
  autoFocusInput,
  onCancel,
  onChange,
  onSubmit,
  onRowCountChange,
  hideOnSubmit
}) {
  const { isEditing, setIsEditing, hasFailed, setHasFailed } = useContext(
    Comment.Context
  );
  const [commentText, setCommentText] = useState(children);
  const [currentInputHeight, setCurrentInputHeight] = useState('0px');
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef(null);
  const focusFallback = useRef(null);

  useEffect(() => {
    setCommentText(children);
  }, [children]);

  const getInputHeight = () => {
    if (inputRef.current) {
      return inputRef.current.getBoundingClientRect().height;
    }
    return currentInputHeight;
  };

  const removeMentionMarkup = newVal => {
    const pattern = /(?:@\[\w+\])+/gi;
    return newVal.replace(pattern, match => {
      const mention = match.replace(/\]|\[/g, '');
      return mention;
    });
  };

  const handleChange = event => {
    const newHeight = getInputHeight();
    if (newHeight !== currentInputHeight) {
      onRowCountChange();
      setCurrentInputHeight(newHeight);
    }
    onChange(removeMentionMarkup(event.target.value));

    return setCommentText(removeMentionMarkup(event.target.value));
  };

  const searchForUsers = term => {
    if (term.trim() !== '' && users.length > 0) {
      return users.filter(
        user =>
          user.name
            .toLowerCase()
            .split(' ')
            .filter(subStr => subStr.lastIndexOf(term, 0) === 0).length > 0 ||
          user.display.toLowerCase().lastIndexOf(term, 0) === 0
      );
    }
    return users;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setHasFocus(false);
      await onSubmit(removeMentionMarkup(commentText));
      setIsEditing(!hideOnSubmit);
    } catch (error) {
      setHasFailed(true);
      setHasFocus(true);
    }
  };
  const [isSubmitting, handleSubmitWithLoader] = useLoader(handleSubmit);

  const handleCancel = () => {
    onCancel();
    setCommentText(children);
    focusFallback.current.focus();
    setIsEditing(false);
  };

  const classNames = cx('comment-edit-form', {
    hidden: !isEditing
  });

  const inputWrapperClassNames = cx('relative p-2 w-full rounded text-sm', {
    'pseudo-border-grey-1px': !hasFocus && !hasFailed,
    'pseudo-border-blue-2px': hasFocus && !hasFailed,
    'pseudo-border-red-2px': hasFailed
  });

  return (
    <form onSubmit={handleSubmitWithLoader} className={classNames}>
      <div className={inputWrapperClassNames}>
        {isEditing && (
          <>
            <MentionsInput
              className="edit-comment"
              value={commentText}
              onChange={handleChange}
              onFocus={() => setHasFocus(true)}
              onBlur={() => setHasFocus(false)}
              placeholder={placeholder}
              markup="@[__display__]"
              autoFocus={autoFocusInput}
              displayTransform={(id, display) => `@${display}`}
              disabled={isSubmitting}
            >
              <Mention
                trigger="@"
                data={search => searchForUsers(search)}
                appendSpaceOnAdd
                renderSuggestion={suggestion => (
                  <Avatar
                    url={suggestion.avatar}
                    initials={suggestion.initials}
                  >
                    <AvatarInformation
                      email={`@${suggestion.display}`}
                      name={suggestion.name}
                    />
                  </Avatar>
                )}
              />
            </MentionsInput>

            <ShortcutTrigger
              shortcutKey="Enter"
              onShortcutTrigger={handleSubmitWithLoader}
              withCtrlKey
            />
            <ShortcutTrigger
              shortcutKey="Enter"
              onShortcutTrigger={handleSubmitWithLoader}
              withMetaKey
            />
            <ShortcutTrigger
              shortcutKey="Escape"
              onShortcutTrigger={handleCancel}
            />
          </>
        )}
      </div>
      {hasFailed && <CommentFailed errorText="This is an error message" />}

      <div className="mt-2 flex justify-end items-center">
        <ButtonLink onClick={handleCancel} className="text-sm mr-2">
          Cancel
        </ButtonLink>

        <ButtonSecondary
          disabled={!commentText}
          className="text-xs"
          size={ButtonPrimary.sizes.xs}
          type="submit"
        >
          Save
          {isSubmitting && <Icon name="loader16" className="ml-2" />}
        </ButtonSecondary>
      </div>

      <input
        ref={focusFallback}
        className="sr-only"
        type="text"
        tabIndex={-1}
        aria-hidden="true"
      />
    </form>
  );
}

EditCommentForm.propTypes = {
  children: string,
  onSubmit: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  onRowCountChange: func,
  autoFocusInput: bool,
  onCancel: func,
  placeholder: string,
  onChange: func,
  hideOnSubmit: bool
};

EditCommentForm.defaultProps = {
  children: '',
  onRowCountChange: () => {},
  onCancel: () => {},
  onChange: () => {},
  autoFocusInput: true,
  placeholder: '',
  hideOnSubmit: true
};

export { EditCommentForm };
