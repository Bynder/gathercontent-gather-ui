import React, { useState, useRef, useEffect } from 'react';
import { Mention, MentionsInput } from 'react-mentions';
import cx from 'classnames';
import { Avatar, AvatarInformation, ShortcutTrigger } from 'lib';

export function InputWithMentions({
  value,
  users,
  onChange,
  onMention,
  onSubmitShortcutTriggered,
  ...rest
}) {
  const [inputValue, setInputValue] = useState(value);
  const [currentInputHeight, setCurrentInputHeight] = useState('0px');
  const hiddenContentRef = useRef(null);
  const mentionsPortalRef = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);

  const getInputHeight = () => {
    if (hiddenContentRef.current) {
      return hiddenContentRef.current.getBoundingClientRect().height;
    }
    return currentInputHeight;
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const newHeight = getInputHeight();
    if (newHeight !== currentInputHeight) {
      setCurrentInputHeight(newHeight);
    }
  }, [inputValue]);

  const removeMentionMarkup = newVal => {
    const pattern = /(?:@\[\w+\])+/gi;
    return newVal.replace(pattern, match => {
      const mention = match.replace(/\]|\[/g, '');
      return mention;
    });
  };

  const handleChange = event => {
    onChange(removeMentionMarkup(event.target.value));
    setInputValue(removeMentionMarkup(event.target.value));
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

  const inputWrapperClassNames = cx('relative w-full');

  return (
    <div
      style={{
        height: currentInputHeight
      }}
      className={inputWrapperClassNames}
    >
      <MentionsInput
        className="mentions-input"
        value={inputValue}
        onChange={handleChange}
        markup="@[__display__]"
        displayTransform={(id, display) => `@${display}`}
        suggestionsPortalHost={mentionsPortalRef.current}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        {...rest}
      >
        <Mention
          trigger="@"
          onAdd={onMention}
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
      <div ref={mentionsPortalRef} />
      <ShortcutTrigger
        shortcutKey="Enter"
        onShortcutTrigger={e => {
          if (!hasFocus || !value) {
            return e;
          }

          return onSubmitShortcutTriggered(e);
        }}
        withCtrlKey
      />
      <ShortcutTrigger
        shortcutKey="Enter"
        onShortcutTrigger={e => {
          if (!hasFocus || !value) {
            return e;
          }

          return onSubmitShortcutTriggered(e);
        }}
        withMetaKey
      />
      <div
        ref={hiddenContentRef}
        style={{
          whiteSpace: 'pre-wrap',
          visibility: 'hidden'
        }}
        className="mentions-input__input absolute top-0"
      >
        {/* This 'i' is intentional, it is to ensure there is text on a new line for height calculation */}
        {inputValue}i
      </div>
    </div>
  );
}
