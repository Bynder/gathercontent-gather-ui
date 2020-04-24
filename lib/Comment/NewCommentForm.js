import React, { useState, useRef } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Mention, MentionsInput } from 'react-mentions';
import Avatar from '../Avatar';
import AvatarInformation from '../Avatar/AvatarInformation';
import ShortcutTrigger from '../ShortcutTrigger';
import Button from '../Button';

export function NewCommentForm({
  onSubmit,
  onRowCountChange,
  users,
  autoFocusInput,
  author,
  onCancel,
  placeholder
}) {
  const [value, setValue] = useState('');
  const [inputHasFocused, setInputHasFocused] = useState(autoFocusInput);
  const [currentInputHeight, setCurrentInputHeight] = useState('0px');
  const inputRef = useRef(null);

  const getInputHeight = () => {
    if (inputRef.current) {
      return inputRef.current.getBoundingClientRect().height;
    }
    return currentInputHeight;
  };

  const handleChange = event => {
    const newHeight = getInputHeight();
    if (newHeight !== currentInputHeight) {
      onRowCountChange();
      setCurrentInputHeight(newHeight);
    }
    return setValue(event.target.value);
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
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Avatar
        className="absolute mr-2"
        url={author.avatar}
        initials={author.initials}
      />
      <div ref={inputRef} className="pl-10 mb-2">
        <MentionsInput
          className="new-comment border border-solid border-neutral-90 rounded py-2 w-full text-sm "
          value={value}
          onChange={handleChange}
          onFocus={() => setInputHasFocused(!inputHasFocused)}
          onBlur={() => setInputHasFocused(!inputHasFocused)}
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
              <Avatar url={suggestion.avatar} initials={suggestion.initials}>
                <AvatarInformation
                  email={`@${suggestion.display}`}
                  name={suggestion.name}
                />
              </Avatar>
            )}
          />
        </MentionsInput>
      </div>
      {inputHasFocused && (
        <div>
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
        </div>
      )}

      <div className="relative text-right">
        <Button types={['link', 'size-sm']} clickHandler={onCancel}>
          Cancel
        </Button>
        <Button
          types={['size-sm', 'primary']}
          disabled={!value}
          clickHandler={() => {}}
          isSubmit
        >
          Comment
        </Button>
      </div>
    </form>
  );
}

NewCommentForm.propTypes = {
  onSubmit: func,
  onRowCountChange: func,
  users: arrayOf(shape({})),
  autoFocusInput: bool,
  author: shape({}),
  onCancel: func,
  placeholder: string
};

NewCommentForm.defaultProps = {
  onSubmit: () => {},
  onRowCountChange: () => {},
  users: [],
  autoFocusInput: false,
  author: {},
  onCancel: () => {},
  placeholder: ''
};
