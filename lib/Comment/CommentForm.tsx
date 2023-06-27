import React, { useState, useRef, useContext, useEffect } from "react";
import { arrayOf, bool, func, shape, string } from "prop-types";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { Mention, MentionsInput } from "react-mentions";
import cx from "classnames";
import {
  Comment,
  Avatar,
  AvatarInformation,
  ShortcutTrigger,
  ButtonPrimary,
  useLoader,
  ButtonTertiary,
  // @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
} from "lib";
import Icon from "../Icon";
import { CommentFailed } from "./CommentFailed";
import TooltipWrapper from "../TooltipWrapper";

function CommentForm({
  children,
  users,
  placeholder,
  onCancel,
  onChange,
  onSubmit,
  onRowCountChange,
  submitText,
  submitTooltipText,
  autoFocusInput,
  onMention,
}: any) {
  const { setIsEditing, hasFailed, setHasFailed }: any = useContext(
    Comment.Context
  );
  const [commentText, setCommentText] = useState(children);
  const [currentInputHeight, setCurrentInputHeight] = useState("0px");
  const [hasFocus, setHasFocus] = useState(false);
  const inputWrapperRef = useRef(null);
  const focusFallback = useRef(null);

  useEffect(() => {
    setCommentText(children);
  }, [children]);

  const getInputHeight = () => {
    if (inputWrapperRef.current) {
      // @ts-expect-error TS(2339): Property 'getBoundingClientRect' does not exist on... Remove this comment to see the full error message
      return inputWrapperRef.current.getBoundingClientRect().height;
    }
    return currentInputHeight;
  };

  const removeMentionMarkup = (newVal: any) => {
    const pattern = /(?:@\[\w+\])+/gi;
    return newVal.replace(pattern, (match: any) => {
      const mention = match.replace(/\]|\[/g, "");
      return mention;
    });
  };

  const handleChange = (event: any) => {
    const newHeight = getInputHeight();
    if (newHeight !== currentInputHeight) {
      onRowCountChange();
      setCurrentInputHeight(newHeight);
    }
    onChange(removeMentionMarkup(event.target.value));

    return setCommentText(removeMentionMarkup(event.target.value));
  };

  const searchForUsers = (term: any) => {
    if (term.trim() !== "" && users.length > 0) {
      const termLowerCase = term.toLowerCase();
      return users.filter(
        (user: any) =>
          user.name
            .toLowerCase()
            .split(" ")
            .filter((subStr: any) => subStr.lastIndexOf(termLowerCase, 0) === 0)
            .length > 0 ||
          user.display.toLowerCase().lastIndexOf(termLowerCase, 0) === 0
      );
    }
    return users;
  };

  const handleSubmit = async () => {
    try {
      setHasFocus(false);
      await onSubmit(removeMentionMarkup(commentText), setCommentText);
      setIsEditing(false);
      setHasFailed(false);
    } catch (error) {
      setHasFailed(true);
    }
  };

  const [isSubmitting, handleSubmitWithLoader] = useLoader(handleSubmit);

  const handleCancel = () => {
    setCommentText(children);
    // @ts-expect-error TS(2531): Object is possibly 'null'.
    focusFallback.current.focus();
    setIsEditing(false);
    onCancel();
  };

  const inputWrapperClassNames = cx("relative p-2 w-full rounded text-sm", {
    "pseudo-border-grey-1px": !hasFocus && !hasFailed,
    "pseudo-border-blue-2px": hasFocus && !hasFailed,
    "pseudo-border-red-2px": hasFailed,
  });

  return (
    <form onSubmit={handleSubmitWithLoader} className="comment-edit-form">
      <div className={inputWrapperClassNames} ref={inputWrapperRef}>
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
            displayTransform={(id: any, display: any) => `@${display}`}
            disabled={isSubmitting}
          >
            <Mention
              trigger="@"
              onAdd={onMention}
              data={(search: any) => searchForUsers(search)}
              appendSpaceOnAdd
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

          <ShortcutTrigger
            shortcutKey="Enter"
            onShortcutTrigger={(e: any) => {
              if (!hasFocus || !commentText) {
                return e;
              }

              return handleSubmitWithLoader(e);
            }}
            withCtrlKey
          />
          <ShortcutTrigger
            shortcutKey="Enter"
            onShortcutTrigger={(e: any) => {
              if (!hasFocus || !commentText) {
                return e;
              }

              return handleSubmitWithLoader(e);
            }}
            withMetaKey
          />
          <ShortcutTrigger
            shortcutKey="Escape"
            onShortcutTrigger={handleCancel}
          />
        </>
      </div>

      {hasFailed && (
        <CommentFailed errorText="Comment failed. Please try again." />
      )}

      <div className="mt-2 flex justify-end items-center">
        <ButtonTertiary
          size={ButtonPrimary.sizes.xs}
          disabled={isSubmitting}
          onClick={handleCancel}
          className="mr-2"
        >
          Cancel
        </ButtonTertiary>

        <TooltipWrapper
          id="submit-conversation-button"
          tooltipText={submitTooltipText}
          placement="bottom"
        >
          <ButtonPrimary
            disabled={!commentText}
            size={ButtonPrimary.sizes.xs}
            type="submit"
          >
            {isSubmitting && (
              <Icon name="loader16" className="mr-2 fill-white" />
            )}
            {hasFailed ? "Retry" : submitText}
          </ButtonPrimary>
        </TooltipWrapper>
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

CommentForm.propTypes = {
  children: string,
  onSubmit: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  onRowCountChange: func,
  autoFocusInput: bool,
  onCancel: func,
  placeholder: string,
  onChange: func,
  submitText: string,
  onMention: func,
  submitTooltipText: string,
};

CommentForm.defaultProps = {
  children: "",
  onRowCountChange: () => {},
  onCancel: () => {},
  onChange: () => {},
  autoFocusInput: false,
  placeholder: "New Comment...",
  submitText: "Comment",
  onMention: () => {},
  submitTooltipText: "",
};

export { CommentForm };
