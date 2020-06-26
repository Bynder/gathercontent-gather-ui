import React, { useState, useRef, useContext } from 'react';
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

function EditCommentForm({
  children,
  onSubmit,
  onRowCountChange,
  users,
  autoFocusInput,
  onCancel,
  placeholder,
  onChange
}) {
  const { isEditing, setIsEditing } = useContext(Comment.Context);
  const [commentText, setCommentText] = useState(children);
  const [currentInputHeight, setCurrentInputHeight] = useState('0px');
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef(null);
  const focusFallback = useRef(null);

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

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(removeMentionMarkup(commentText));
    setIsEditing(false);
  };

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
    'multiple-borders-grey-1px': !hasFocus,
    'multiple-borders-blue-2px': hasFocus
  });

  const [isSubmitting, handleOnSubmit] = useLoader(onSubmit);

  return (
    <form onSubmit={handleOnSubmit} className={classNames}>
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
              onShortcutTrigger={handleSubmit}
              withCtrlKey
            />
            <ShortcutTrigger
              shortcutKey="Enter"
              onShortcutTrigger={handleSubmit}
              withMetaKey
            />
            <ShortcutTrigger
              shortcutKey="Escape"
              onShortcutTrigger={handleCancel}
            />
          </>
        )}
      </div>

      <div className="mt-2 flex justify-end items-center">
        <ButtonLink onClick={handleCancel} className="text-sm mr-2">
          Cancel
        </ButtonLink>

        <ButtonSecondary
          disabled={!commentText}
          className="text-xs mr-1"
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
  children: string.isRequired,
  onSubmit: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  onRowCountChange: func,
  autoFocusInput: bool,
  onCancel: func,
  placeholder: string,
  onChange: func
};

EditCommentForm.defaultProps = {
  onRowCountChange: () => {},
  onCancel: () => {},
  onChange: () => {},
  autoFocusInput: true,
  placeholder: ''
};

export { EditCommentForm };
