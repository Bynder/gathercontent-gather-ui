import React, { useState, useRef, useEffect } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Mention, MentionsInput } from "react-mentions";
import cx from "classnames";
import { Avatar, AvatarInformation, ShortcutTrigger } from "lib";

export function InputWithMentions({
  value,
  users,
  onChange,
  onMention,
  onSubmitShortcutTriggered,
  ...rest
}: any) {
  const [inputValue, setInputValue] = useState(value);
  const [currentInputHeight, setCurrentInputHeight] = useState("0px");
  const hiddenContentRef = useRef(null);
  const mentionsPortalRef = useRef(null);
  const [hasFocus, setHasFocus] = useState(false);

  const getInputHeight = () => {
    if (hiddenContentRef.current) {
      // @ts-expect-error TS(2339): Property 'getBoundingClientRect' does not exist on... Remove this comment to see the full error message
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

  const removeMentionMarkup = (newVal: any) => {
    const pattern = /(?:@\[\w+\])+/gi;
    return newVal.replace(pattern, (match: any) => {
      const mention = match.replace(/\]|\[|\(\d+\)/g, "");
      return mention;
    });
  };

  const handleChange = (event: any) => {
    onChange(removeMentionMarkup(event.target.value));
    setInputValue(removeMentionMarkup(event.target.value));
  };

  const searchForUsers = (term: any) => {
    if (term.trim() !== "" && users.length > 0) {
      return users.filter(
        (user: any) =>
          user.name
            .toLowerCase()
            .split(" ")
            .filter((subStr: any) => subStr.lastIndexOf(term, 0) === 0).length >
            0 || user.display.toLowerCase().lastIndexOf(term, 0) === 0
      );
    }
    return users;
  };

  const inputWrapperClassNames = cx("relative w-full");

  return (
    <div
      style={{
        height: currentInputHeight,
      }}
      className={inputWrapperClassNames}
    >
      <MentionsInput
        className="gui-mentions-input"
        value={inputValue}
        onChange={handleChange}
        suggestionsPortalHost={mentionsPortalRef.current}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        {...rest}
      >
        <Mention
          trigger="@"
          onAdd={onMention}
          data={(search: any) => searchForUsers(search)}
          appendSpaceOnAdd
          displayTransform={(id: any, display: any) => `@${display}`}
          markup="@[__display__]"
          renderSuggestion={(suggestion: any) => (
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
        onShortcutTrigger={(e: any) => {
          if (!hasFocus || !value) {
            return e;
          }

          return onSubmitShortcutTriggered(e);
        }}
        withCtrlKey
      />
      <ShortcutTrigger
        shortcutKey="Enter"
        onShortcutTrigger={(e: any) => {
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
          whiteSpace: "pre-wrap",
          visibility: "hidden",
        }}
        className="gui-mentions-input__input absolute top-0"
      >
        {/* This 'i' is intentional, it is to ensure there is text on a new line for height calculation */}
        {inputValue}i
      </div>
    </div>
  );
}
