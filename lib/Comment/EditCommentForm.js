import React, { useState, useRef } from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { Mention, MentionsInput } from 'react-mentions';
import Avatar from '../Avatar';
import AvatarInformation from '../Avatar/AvatarInformation';
import ShortcutTrigger from '../ShortcutTrigger';
import Button from '../Button';
import { MetaDot } from './CommentMeta';

export function EditCommentForm({
  onSubmit,
  onRowCountChange,
  users,
  autoFocusInput,
  onCancel,
  placeholder,
  initialValue
}) {
  const [value, setValue] = useState(initialValue);
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
      <div ref={inputRef}>
        <MentionsInput
          className="edit-comment w-full text-sm "
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

      <div className=" mb-2 relative inline-flex item justify-center items-center">
        <Button
          types={['link', 'collapse', 'collapse']}
          clickHandler={onCancel}
          className="text-xs mr-1"
        >
          Cancel
        </Button>
        <MetaDot />
        <Button
          types={['link', 'link-default', 'collapse']}
          disabled={!value}
          clickHandler={() => {}}
          isSubmit
          className="text-xs mr-1"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

EditCommentForm.propTypes = {
  onSubmit: func,
  onRowCountChange: func,
  users: arrayOf(shape({})),
  autoFocusInput: bool,
  initialValue: string,
  onCancel: func,
  placeholder: string
};

EditCommentForm.defaultProps = {
  onSubmit: () => {},
  onRowCountChange: () => {},
  users: [],
  autoFocusInput: false,
  initialValue: '',
  onCancel: () => {},
  placeholder: ''
};
